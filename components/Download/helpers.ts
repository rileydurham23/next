const isAMD64 = (name) => {
  return name.indexOf("x86_64") !== -1 || name.indexOf("amd64") !== -1;
};

const isi386 = (name) => {
  return name.indexOf("386") !== -1;
};

const isCentos6FIPS = (name) => {
  return name.indexOf("-centos6-fips") !== -1;
};

const isCentos6 = (name) => {
  return name.indexOf("-centos6") !== -1;
};

const isCentos7FIPS = (name) => {
  return name.indexOf("-centos7-fips") !== -1;
};

const isCentos7 = (name) => {
  return name.indexOf("-centos7") !== -1;
};

const isFIPS = (name) => {
  return name.indexOf("-fips") !== -1;
};

const isGo197 = (name) => {
  return name.indexOf("-go1.9.7") !== -1;
};

const isRPM = (name) => {
  return name.indexOf(".rpm") !== -1;
};

const isDEB = (name) => {
  return name.indexOf(".deb") !== -1;
};

// Use more explicit string matches here to avoid matching 'arm64'
const isARM = (name) => {
  return (
    name.indexOf("-arm-") !== -1 ||
    name.indexOf(".arm.") !== -1 ||
    name.indexOf("_arm.") !== -1
  );
};

const isARM64 = (name) => {
  return name.indexOf("arm64") !== -1;
};

const isTeleportPKG = (name) => {
  return name.indexOf("teleport") !== -1 && name.indexOf(".pkg") !== -1;
};

const isTshPKG = (name) => {
  return name.indexOf("tsh") !== -1 && name.indexOf(".pkg") !== -1;
};

export const getDownloadInfo = (name) => {
  let data = { icon: "", name: "", meta: "" };

  if (isARM64(name)) {
    let downloadName = "Linux ARM64/ARMv8 (64-bit)";

    if (isRPM(name)) {
      downloadName = "Linux ARM64/ARMv8 RPM (64-bit)";
    } else if (isDEB(name)) {
      downloadName = "Linux ARM64/ARMv8 DEB (64-bit)";
    }

    data = { icon: "linux", name: downloadName, meta: "" };
  }

  if (isARM(name)) {
    let downloadName = "Linux ARMv7 (32-bit)";

    if (isRPM(name)) {
      downloadName = "Linux ARMv7 RPM (32-bit)";
    } else if (isDEB(name)) {
      downloadName = "Linux ARMv7 DEB (32-bit)";
    }

    data = { icon: "linux", name: downloadName, meta: "" };
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

    data = { icon: "linux", name: downloadName, meta: "" };
  }

  if (isi386(name)) {
    let downloadName = "Linux 32-bit";

    if (isRPM(name)) {
      downloadName = "Linux 32-bit RPM";
    } else if (isDEB(name)) {
      downloadName = "Linux 32-bit DEB";
    }

    data = { icon: "linux", name: downloadName, meta: "" };
  }

  if (name.indexOf("-darwin-") !== -1) {
    data = { icon: "apple", name: "MacOS", meta: "" };
  }

  if (isTeleportPKG(name)) {
    data = { icon: "apple", name: "MacOS .pkg installer", meta: "" };
  }

  if (isTshPKG(name)) {
    data = {
      icon: "apple",
      name: "MacOS .pkg installer (tsh client only, signed)",
      meta: "",
    };
  }

  if (name.indexOf("-windows-") !== -1) {
    data = {
      icon: "windows",
      name: "Windows (64-bit, tsh client only)",
      meta: "",
    };
  }

  return data;
};

/*
  Is OS Methods

  @type const
  @description These helper methods determine what Operating System is being use
  @returns {boolean}
*/

export const isMacOs = (name) => {
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

export const isWindows = (name) => {
  let isWin = false;

  if (name.indexOf("-windows-") !== -1) {
    isWin = true;
  }

  return isWin;
};

export const isLinux = (name) => {
  let isLnx = false;

  if (!isMacOs(name) && !isWindows(name)) {
    isLnx = true;
  }

  return isLnx;
};

export const groupByOS = (downloads) => {
  const sortedDownloads = {
    mac: [],
    windows: [],
    linux: [],
  };

  // console.log("$$$$$", downloads);

  downloads.forEach((release) => {
    const name = release.name;
    if (isWindows(name)) {
      sortedDownloads.windows.push(release);
    } else if (isMacOs(name)) {
      sortedDownloads.mac.push(release);
    } else {
      sortedDownloads.linux.push(release);
    }
  });

  return sortedDownloads;
};

export type OsParameter = "windows" | "mac" | "linux";

const osParameterSet = new Set<OsParameter>(["windows", "mac", "linux"]);

// type predicate function. more refined type of boolean
const isOsParameter = (input: string | null): input is OsParameter =>
  Set.prototype.has.call(osParameterSet, input);

export const getOsParameter = (url: string): OsParameter | void => {
  console.log("????????? url", url);
  if (isOsParameter(url)) {
    return url;
  }

  // default assignment is handled at the component layer so this needs to be undefined
  return undefined;
};
