import type { OS } from "./types";

const isAMD64 = (name: string) => {
  return name.indexOf("x86_64") !== -1 || name.indexOf("amd64") !== -1;
};

const isi386 = (name: string) => {
  return name.indexOf("386") !== -1;
};

const isCentos6FIPS = (name: string) => {
  return name.indexOf("-centos6-fips") !== -1;
};

const isCentos6 = (name: string) => {
  return name.indexOf("-centos6") !== -1;
};

const isCentos7FIPS = (name: string) => {
  return name.indexOf("-centos7-fips") !== -1;
};

const isCentos7 = (name: string) => {
  return name.indexOf("-centos7") !== -1;
};

const isFIPS = (name: string) => {
  return name.indexOf("-fips") !== -1;
};

const isGo197 = (name: string) => {
  return name.indexOf("-go1.9.7") !== -1;
};

const isRPM = (name: string) => {
  return name.indexOf(".rpm") !== -1;
};

const isDEB = (name: string) => {
  return name.indexOf(".deb") !== -1;
};

// Use more explicit string matches here to avoid matching 'arm64'
const isARM = (name: string) => {
  return (
    name.indexOf("-arm-") !== -1 ||
    name.indexOf(".arm.") !== -1 ||
    name.indexOf("_arm.") !== -1
  );
};

const isARM64 = (name: string) => {
  return name.indexOf("arm64") !== -1;
};

const isTeleportPKG = (name: string) => {
  return name.indexOf("teleport") !== -1 && name.indexOf(".pkg") !== -1;
};

const isTshPKG = (name: string) => {
  return name.indexOf("tsh") !== -1 && name.indexOf(".pkg") !== -1;
};

interface DefaultDownloadInfo {
  os: "";
  name: "";
}

interface DownloadInfo {
  os: OS;
  name: string;
}

const defaultDownloadInfo: DefaultDownloadInfo = { os: "", name: "" };

export const getDownloadInfo = (
  name: string
): DownloadInfo | DefaultDownloadInfo => {
  let data: DefaultDownloadInfo | DownloadInfo = defaultDownloadInfo;

  if (isARM64(name)) {
    let downloadName = "Linux ARM64/ARMv8 (64-bit)";

    if (isRPM(name)) {
      downloadName = "Linux ARM64/ARMv8 RPM (64-bit)";
    } else if (isDEB(name)) {
      downloadName = "Linux ARM64/ARMv8 DEB (64-bit)";
    }

    data = { os: "linux", name: downloadName };
  }

  if (isARM(name)) {
    let downloadName = "Linux ARMv7 (32-bit)";

    if (isRPM(name)) {
      downloadName = "Linux ARMv7 RPM (32-bit)";
    } else if (isDEB(name)) {
      downloadName = "Linux ARMv7 DEB (32-bit)";
    }

    data = { os: "linux", name: downloadName };
  }

  if (isAMD64(name)) {
    let downloadName = "Linux 64-bit";

    if (isRPM(name)) {
      if (isGo197(name)) {
        downloadName = "Linux 64-bit RPM (RHEL5.x compatible)";
      } else if (isFIPS(name)) {
        downloadName = "Linux 64-bit RPM (FedRAMP/FIPS)";
      } else {
        downloadName = "Linux 64-bit RPM";
      }
    } else if (isDEB(name)) {
      if (isFIPS(name)) {
        downloadName = "Linux 64-bit DEB (FedRAMP/FIPS)";
      } else {
        downloadName = "Linux 64-bit DEB";
      }
    } else {
      if (isGo197(name)) {
        downloadName = "Linux 64-bit (RHEL5.x compatible)";
      } else if (isCentos6FIPS(name)) {
        downloadName =
          "Linux 64-bit (RHEL/CentOS 6.x compatible, FedRAMP/FIPS)";
      } else if (isCentos6(name)) {
        downloadName = "Linux 64-bit (RHEL/CentOS 6.x compatible)";
      } else if (isCentos7FIPS(name)) {
        downloadName =
          "Linux 64-bit (RHEL/CentOS 7.x compatible, FedRAMP/FIPS)";
      } else if (isCentos7(name)) {
        downloadName = "Linux 64-bit (RHEL/CentOS 7.x compatible)";
      } else if (isFIPS(name)) {
        downloadName = "Linux 64-bit (FedRAMP/FIPS)";
      }
    }

    data = { os: "linux", name: downloadName };
  }

  if (isi386(name)) {
    let downloadName = "Linux 32-bit";

    if (isRPM(name)) {
      downloadName = "Linux 32-bit RPM";
    } else if (isDEB(name)) {
      downloadName = "Linux 32-bit DEB";
    }

    data = { os: "linux", name: downloadName };
  }

  if (name.indexOf("-darwin-") !== -1) {
    data = { os: "mac", name: "MacOS" };
  }

  if (isTeleportPKG(name)) {
    data = { os: "mac", name: "MacOS .pkg installer" };
  }

  if (isTshPKG(name)) {
    data = {
      os: "mac",
      name: "MacOS .pkg installer (tsh client only, signed)",
    };
  }

  if (name.indexOf("-windows-") !== -1) {
    data = {
      os: "windows",
      name: "Windows (64-bit, tsh client only)",
    };
  }

  return data;
};

export const isMacOs = (name: string): boolean => {
  let isMac = false;

  if (
    name.indexOf("-darwin-") !== -1 ||
    isTeleportPKG(name) ||
    isTshPKG(name)
  ) {
    isMac = true;
  }

  return isMac;
};

export const isWindows = (name: string): boolean => {
  let isWin = false;

  if (name.indexOf("-windows-") !== -1) {
    isWin = true;
  }

  return isWin;
};

export const isLinux = (name: string): boolean => {
  let isLnx = false;

  if (!isMacOs(name) && !isWindows(name)) {
    isLnx = true;
  }

  return isLnx;
};

// export const groupByOS = (downloads) => {
//   const sortedDownloads = {
//     mac: [],
//     windows: [],
//     linux: [],
//   };

//   downloads.forEach((release) => {
//     const name = release.name;
//     if (isWindows(name)) {
//       sortedDownloads.windows.push(release);
//     } else if (isMacOs(name)) {
//       sortedDownloads.mac.push(release);
//     } else {
//       sortedDownloads.linux.push(release);
//     }
//   });

//   return sortedDownloads;
// };

const osParameterSet = new Set<OS>(["windows", "mac", "linux"]);

// type predicate function. more refined type of boolean
const isOsParameter = (input: string | null): input is OS =>
  Set.prototype.has.call(osParameterSet, input);

export const getOsParameter = (url: string): OS | void => {
  if (isOsParameter(url)) {
    return url;
  }

  // default assignment is handled at the component layer so this needs to be undefined
  return undefined;
};
