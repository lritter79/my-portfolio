//from https://github.com/trekhleb/trekhleb.github.io/blob/master/src/posts/2021/gyro-web/components/useDeviceOrientation.ts
import { useCallback, useEffect, useState } from "react";

const roundAngle = (angle) => {
  if (typeof angle !== "number") {
    return angle;
  }
  const fractionDigits = 1;
  return +angle.toFixed(fractionDigits);
};

export const useDeviceOrientation = () => {
  const [orientationError, setError] = useState(null);
  const [orientation, setOrientation] = useState(null);

  const onDeviceOrientation = (event) => {
    const angles = {
      alpha: roundAngle(event.alpha),
      beta: roundAngle(event.beta),
      gamma: roundAngle(event.gamma),
      absolute: event.absolute,
    };
    setOrientation(angles);
    if (
      angles &&
      typeof angles.alpha === "number" &&
      typeof angles.beta === "number" &&
      typeof angles.gamma === "number"
    ) {
      const a = angles.alpha > 180 ? angles.alpha - 360 : angles.alpha;
      const b = angles.beta - 90;
      const g = angles.gamma > 180 ? 360 - angles.gamma : -angles.gamma;
    }
  };

  const revokeAccessAsync = async () => {
    window.removeEventListener("deviceorientation", onDeviceOrientation);
    setOrientation(null);
  };

  const requestAccessAsync = async () => {
    if (!DeviceOrientationEvent) {
      setError(
        new Error("Device orientation event is not supported by your browser")
      );
      return false;
    }

    if (
      DeviceOrientationEvent.requestPermission &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      let permission;
      try {
        permission = await DeviceOrientationEvent.requestPermission();
      } catch (err) {
        const e = ((err && err.message) || "unknown error");
        setError(e);
        return false;
      }
      if (permission !== "granted") {
        setError("Request to access the device orientation was rejected");
        return false;
      }
    }

    window.addEventListener("deviceorientation", onDeviceOrientation);

    return true;
  };

  const requestAccess = useCallback(requestAccessAsync, []);
  const revokeAccess = useCallback(revokeAccessAsync, []);

  useEffect(() => {
    return () => {
      revokeAccess();
    };
  }, [revokeAccess]);

  return {
    orientation,
    orientationError,
    requestAccess,
    revokeAccess,
  };
};
