import _ from "lodash";

function isAMD64(name) {
  return name.indexOf("x86_64") !== -1 || name.indexOf("amd64") !== -1;
}

function isi386(name) {
  return name.indexOf("386") !== -1;
}

function isCentos6FIPS(name) {
  return name.indexOf("-centos6-fips") !== -1;
}

function isCentos6(name) {
  return name.indexOf("-centos6") !== -1;
}

function isCentos7FIPS(name) {
  return name.indexOf("-centos7-fips") !== -1;
}

function isCentos7(name) {
  return name.indexOf("-centos7") !== -1;
}

function isFIPS(name) {
  return name.indexOf("-fips") !== -1;
}

function isGo197(name) {
  return name.indexOf("-go1.9.7") !== -1;
}

function isRPM(name) {
  return name.indexOf(".rpm") !== -1;
}

function isDEB(name) {
  return name.indexOf(".deb") !== -1;
}

// Use more explicit string matches here to avoid matching 'arm64'
function isARM(name) {
  return (
    name.indexOf("-arm-") !== -1 ||
    name.indexOf(".arm.") !== -1 ||
    name.indexOf("_arm.") !== -1
  );
}

function isARM64(name) {
  return name.indexOf("arm64") !== -1;
}

function isTeleportPKG(name) {
  return name.indexOf("teleport") !== -1 && name.indexOf(".pkg") !== -1;
}

function isTshPKG(name) {
  return name.indexOf("tsh") !== -1 && name.indexOf(".pkg") !== -1;
}

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
