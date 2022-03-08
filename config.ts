export default {
  versions: [
    {
      name: "4.4",
      branch: "branch/4.4",
    },
    {
      name: "5.0",
      branch: "branch/5.0",
    },
    {
      name: "6.0",
      branch: "branch/v6.0",
    },
    {
      name: "6.1",
      branch: "branch/v6.1",
    },
    {
      name: "6.2",
      branch: "branch/v6.2",
    },
    {
      name: "7.0",
      branch: "branch/v7",
    },
    {
      name: "8.0",
      branch: "branch/v8",
      latest: true,
    },
    {
      name: "9.0",
      branch: "branch/v9",
    },
    {
      name: "10.0",
      branch: "master",
    },
  ],
  redirects: [
    {
      source: "/enterprise-trial/",
      destination: "/teleport-demo/",
      permanent: true,
    },
    {
      source: "/login/",
      destination: "https://teleport.sh",
      permanent: true,
    },
  ],
  allowedMarketoIds: [
    1, 1021, 1027, 1028, 1039, 1101, 1103, 1126, 1133, 1139, 1146, 1150, 1151,
    1160, 1162, 1165, 1167, 1172, 1175, 1177, 1179, 1185, 1189, 1192, 1227,
    1247, 1252, 1254, 1256, 2341,
  ],
};
