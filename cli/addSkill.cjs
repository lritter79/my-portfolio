#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const dataFilePath = path.join(
  __dirname,
  "..",
  "data",
  "technicalSkillsArray.js"
);

// Load the skillsArray from the file
function loadSkillsArray() {
  try {
    const fileContent = fs.readFileSync(dataFilePath, "utf-8");
    const matches = fileContent.match(/export const skillsArray = (.*);/s);
    if (matches && matches[1]) {
      return eval(`(${matches[1]})`); // Parse the array from the file
    }
    throw new Error("Unable to parse skillsArray.");
  } catch (error) {
    console.error("Error loading skillsArray:", error.message);
    process.exit(1);
  }
}

// Save the updated skillsArray back to the file
function saveSkillsArray(skillsArray) {
  try {
    const updatedContent = `export const skillsArray = ${JSON.stringify(
      skillsArray,
      null,
      2
    )};\n`;
    fs.writeFileSync(dataFilePath, updatedContent, "utf-8");
    console.log("✅ Skills array updated successfully.");
  } catch (error) {
    console.error("Error saving skillsArray:", error.message);
    process.exit(1);
  }
}

async function main() {
  const skillsArray = loadSkillsArray();

  // Prompt the user to select a category
  const { categoryKey } = await inquirer.prompt([
    {
      type: "list",
      name: "categoryKey",
      message: "Select the category to which you want to add a new skill:",
      choices: skillsArray.map((category) => ({
        name: category.title,
        value: category.key,
      })),
    },
  ]);

  // Prompt the user to enter the new skill
  const { newSkill } = await inquirer.prompt([
    {
      type: "input",
      name: "newSkill",
      message: "Enter the new skill:",
      validate: (input) => (input.trim() ? true : "Skill cannot be empty."),
    },
  ]);

  // Find the category and add the new skill
  const category = skillsArray.find((cat) => cat.key === categoryKey);
  if (category) {
    category.skills.push(newSkill);
    saveSkillsArray(skillsArray);
  } else {
    console.error("Category not found.");
    process.exit(1);
  }
}

main();
