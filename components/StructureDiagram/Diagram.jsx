/*
  NPM PACKAGES
*/
import React from "react";
import styled from "styled-components";

/*
  HELPERS
*/
import DiagramData from "./data";

/*
  COMPONENTS
*/
import serverImage from "./images/server.svg";
import databaseImage from "./images/database.svg";
import desktopImage from "./images/desktop.svg";
import auditImage from "./images/audit.svg";
import usersImage from "./images/user.svg";
import tunnelImage from "./images/tunnel.svg";
import clusterImage from "./images/kubernetes.svg";
import webappImage from "./images/application.svg";
import Line from "./Line.jsx";
import Arrow from "./Arrow.jsx";
import InfoBox from "./InfoBox.jsx";
import Legend from "./Legend.jsx";
import NetworkBox from "./NetworkBox.jsx";
import { DiagramButton, ServiceButton } from "./DiagramButtons.jsx";

/* 
  Diagrams

  @type Class  
  @description This method is used to create interactive diagrams
  @param {string} product  - The product the diagram represents
  @returns component object 
*/

export class StructureDiagram extends React.Component {
  constructor(props) {
    super(props);

    // BIND METHODS
    this.changeSelectedItem = this.changeSelectedItem.bind(this);

    // SET DEFAULT STATE
    this.state = {
      selected: DiagramData.intro,
    };
  }

  changeSelectedItem(item) {
    const data = DiagramData[item] || null;
    this.setState({
      selected: data,
      kind: item,
    });
  }

  renderInfoBox() {
    let infobox = null;

    if (this.state.selected) {
      let { title, description, url } = this.state.selected;
      infobox = <InfoBox title={title} description={description} url={url} />;
    }

    return infobox;
  }

  // Green arrows/lines that appear in the default view pointing to Proxy
  renderProxyArrows() {
    let arrows = null;
    const { selected } = this.state;

    if (selected && selected.lines === "proxy") {
      arrows = (
        <>
          <StyledProxyArrow1 color="green" direction="bottom" />
          <StyledProxyArrow2 color="green" direction="right" />
          <StyledProxyArrow3 color="green" direction="right" />
          <StyledProxyArrow4 color="green" direction="right" />
          <StyledProxyArrow5 color="green" direction="left" />
          <StyledProxyArrow6 color="green" direction="left" />
          <StyledProxyArrow7 color="green" direction="left" />
          <StyledProxyArrow8 color="green" direction="right" />
          <StyledProxyArrow9 color="green" direction="left" />
          <StyledProxyArrow10 color="green" direction="right" />
          <StyledProxyArrow11 color="green" direction="left" />
          <StyledProxyLine1 color="green" direction="vertical" />
          <StyledProxyLine2 color="green" direction="vertical" />
          <StyledProxyLine3 color="green" direction="horizontal" />
          <StyledProxyLineDB color="green" direction="horizontal" />
          <StyledProxyLine4 color="green" direction="horizontal" />
          <StyledProxyLine5 color="green" direction="horizontal" />
          <StyledProxyLine6 color="green" direction="horizontal" />
          <StyledProxyLine7 color="green" direction="horizontal" />
          <StyledProxyLine8 color="green" direction="horizontal" />
          <StyledProxyLine9 color="green" direction="horizontal" />
          <StyledProxyLine10 color="green" direction="vertical" />
          <StyledProxyLine11 color="green" direction="vertical" />
          <StyledProxyLine14 color="green" direction="horizontal" />
          <StyledProxyLine13 color="green" direction="horizontal" />
          <StyledProxyLine12 color="green" direction="horizontal" />
        </>
      );
    }

    return arrows;
  }

  // Red lines/arrows that point to Auth when Auth or Audit Log are clicked
  renderAuditArrows() {
    let arrows = null;
    const { selected } = this.state;

    if (selected && selected.lines === "audit") {
      arrows = (
        <>
          <StyledAuditArrow1 color="red" direction="top" />
          <StyledAuditArrow2 color="red" direction="left" />
          <StyledAuditArrow3 color="red" direction="right" />
          <StyledAuditArrow4 color="red" direction="right" />
          <StyledAuditLine1 color="red" direction="vertical" />
          <StyledAuditLine2 color="red" direction="vertical" />
          <StyledAuditLine3 color="red" direction="horizontal" />
          <StyledAuditLine4 color="red" direction="horizontal" />
          <StyledAuditLine5 color="red" direction="horizontal" />
          <StyledAuditLine6 color="red" direction="horizontal" />
          <StyledAuditLine7 color="red" direction="horizontal" />
          <StyledAuditLine8 color="red" direction="horizontal" />
          <StyledAuditLine9 color="red" direction="horizontal" />
          <StyledAuditLine11 color="red" direction="horizontal" />
          <StyledAuditLine12 color="red" direction="horizontal" />
          <StyledAuditLine13 color="red" direction="horizontal" />
          <StyledAuditLine14 color="red" direction="horizontal" />
          <StyledAuditLine10 color="red" direction="vertical" />
        </>
      );
    }

    return arrows;
  }

  render() {
    const isTunnelSelected = this.state.kind === "tunnel" ? true : false;
    const isNodeSelected = this.state.kind === "sshnode" ? true : false;
    const isK8SSelected = this.state.kind === "k8scluster" ? true : false;
    const isWebSelected = this.state.kind === "webapp" ? true : false;
    const isDatabaseSelected = this.state.kind === "database" ? true : false;
    const isPNodeSelected = this.state.kind === "privatesshnode" ? true : false;
    const isPDatabaseSelected =
      this.state.kind === "privatedatabase" ? true : false;
    const isPK8SSelected =
      this.state.kind === "privatek8scluster" ? true : false;
    const isPWebSelected = this.state.kind === "privatewebapp" ? true : false;
    const isAuditSelected = this.state.kind === "audit" ? true : false;
    const isAuthSelected = this.state.kind === "authserver" ? true : false;
    const isUsersSelected = this.state.kind === "users" ? true : false;
    const isDesktopSelected = this.state.kind === "desktop" ? true : false;

    return (
      <StyledContainer>
        <StyledInternet title="Internet">
          <h2>Public Network</h2>
          <StyledUsersButton
            selected={isUsersSelected}
            title="users"
            onClick={() => this.changeSelectedItem("users")}
          >
            <img alt="users" src={usersImage} />
            <h4>Users</h4>
          </StyledUsersButton>
        </StyledInternet>

        <StyledEdge title="Edge Network">
          <h2>Edge Network</h2>
          <StyledTunnelImage
            selected={isTunnelSelected}
            src={tunnelImage}
            onClick={() => this.changeSelectedItem("tunnel")}
          />
          <StyledNodeIButton
            className="is-small"
            selected={isNodeSelected}
            title="SSH Nodes"
            onClick={() => this.changeSelectedItem("sshnode")}
          >
            <img alt="ssh nodes" src={serverImage} />
            <h4>SSH Node</h4>
          </StyledNodeIButton>
          <StyledK8SIButton
            className="is-small"
            selected={isK8SSelected}
            title="K8S Clusters"
            onClick={() => this.changeSelectedItem("k8scluster")}
          >
            <img alt="k8s clusters" src={clusterImage} />
            <h4>K8S Cluster</h4>
          </StyledK8SIButton>
          <StyledWepAppIButton
            className="is-small"
            selected={isWebSelected}
            title="Web Apps"
            onClick={() => this.changeSelectedItem("webapp")}
          >
            <img alt="web apps" src={webappImage} />
            <h4>Web App</h4>
          </StyledWepAppIButton>
          <StyledDatabaseIButton
            className="is-small"
            selected={isDatabaseSelected}
            title="Database"
            onClick={() => this.changeSelectedItem("database")}
          >
            <img alt="database" src={databaseImage} />
            <h4>Database</h4>
          </StyledDatabaseIButton>
          <StyledDesktopIButton
            className="is-small"
            selected={isDesktopSelected}
            title="Desktop"
            onClick={() => this.changeSelectedItem("desktop")}
          >
            <img alt="Desktop" src={desktopImage} />
            <h4>Desktop Access</h4>
          </StyledDesktopIButton>
        </StyledEdge>

        <StyledNetwork title="Private Network">
          <h2>Private Network</h2>
          <ServiceButton
            color="green"
            glow={true}
            onClick={() => this.changeSelectedItem("proxy")}
          >
            <button>Proxy</button>
            <p>proxy.example.com</p>
          </ServiceButton>
          <StyledAuditButton selected={isAuthSelected} color="red">
            <button onClick={() => this.changeSelectedItem("authserver")}>
              Auth
            </button>
          </StyledAuditButton>

          {this.renderProxyArrows()}
          {this.renderAuditArrows()}

          <StyledAuditLogButton
            selected={isAuditSelected}
            title="SSH Nodes"
            onClick={() => this.changeSelectedItem("audit")}
          >
            <img alt="ssh nodes" src={auditImage} />
            <h4>Audit Log</h4>
          </StyledAuditLogButton>
          <StyledDatabasePButton
            selected={isPDatabaseSelected}
            title="Database"
            onClick={() => this.changeSelectedItem("privatedatabase")}
          >
            <img alt="database" src={databaseImage} />
            <h4>Database</h4>
          </StyledDatabasePButton>
          <StyledNodePButton
            selected={isPNodeSelected}
            title="SSH Nodes"
            onClick={() => this.changeSelectedItem("privatesshnode")}
          >
            <img alt="ssh nodes" src={serverImage} />
            <h4>SSH Node</h4>
          </StyledNodePButton>
          <StyledK8SPButton
            selected={isPK8SSelected}
            title="K8S Clusters"
            onClick={() => this.changeSelectedItem("privatek8scluster")}
          >
            <img alt="k8s clusters" src={clusterImage} />
            <h4>K8S Cluster</h4>
          </StyledK8SPButton>
          <StyledWepAppPButton
            selected={isPWebSelected}
            title="Web Apps"
            onClick={() => this.changeSelectedItem("privatewebapp")}
          >
            <img alt="webapps" src={webappImage} />
            <h4>Web App</h4>
          </StyledWepAppPButton>
          <StyledDesktopPButton
            selected={isDesktopSelected}
            title="Desktop"
            onClick={() => this.changeSelectedItem("desktop")}
          >
            <img alt="desktop" src={desktopImage} />
            <h4>Desktop Access</h4>
          </StyledDesktopPButton>
        </StyledNetwork>

        {this.renderInfoBox()}
        <Legend />
      </StyledContainer>
    );
  }
}

// Proxy Lines & Arrows
const StyledProxyArrow1 = styled(Arrow)`
  top: 230px;
  left: -9px;
`;

//arrow to Web App in PRIVATE NETWORK
const StyledProxyArrow2 = styled(Arrow)`
  bottom: 270px;
  right: 126px;
`;

//arrow to Desktop in PRIVATE NETWORK
const StyledProxyArrow3 = styled(Arrow)`
  bottom: 86px;
  right: 126px;
`;
const StyledProxyArrow4 = styled(Arrow)`
  top: 165px;
  right: 126px;
`;
//arrow to K8s in EDGE NETWORK
const StyledProxyArrow5 = styled(Arrow)`
  bottom: 274px;
  left: -130px;
`;
//arrow to Web App in EDGE NETWORK
const StyledProxyArrow6 = styled(Arrow)`
  bottom: 194px;
  left: -130px;
`;
const StyledProxyArrow7 = styled(Arrow)`
  top: 186px;
  left: -130px;
`;
const StyledProxyArrow8 = styled(Arrow)`
  bottom: 174px;
  right: 126px;
`;

//Arrow for Database in EDGE NETWORK
const StyledProxyArrow9 = styled(Arrow)`
  bottom: 114px;
  left: -130px;
`;

//Arrow for SSH NOde in PRIVATE NETWORK
const StyledProxyArrow10 = styled(Arrow)`
  top: 78px;
  right: 126px;
`;

//Arrow for Desktop in EDGE NETWORK
const StyledProxyArrow11 = styled(Arrow)`
  bottom: 35px;
  left: -130px;
`;

//Proxy Lines are GREEN
const StyledProxyLine1 = styled(Line)`
  height: 72px;
  left: -2px;
  top: 303px;
`;

//long vertical GREEN line in PRIVATE NETWORK
const StyledProxyLine2 = styled(Line)`
  right: 164px;
  height: 380px;
  bottom: 92px;
`;
const StyledProxyLine3 = styled(Line)`
  width: 28px;
  right: 138px;
  top: 172px;
`;
const StyledProxyLineDB = styled(Line)`
  width: 28px;
  right: 138px;
  top: 84px;
`;
const StyledProxyLine4 = styled(Line)`
  width: 28px;
  right: 138px;
  top: 277px;
`;

//horizontal line to Desktop in PRIVATE NETWORK
const StyledProxyLine5 = styled(Line)`
  width: 28px;
  right: 138px;
  bottom: 92px;
`;

//long horizontal line to DB in PRIVATE NETWORK
const StyledProxyLine6 = styled(Line)`
  width: 240px;
  left: -1px;
  top: 373px;
`;

//horizontal line to SSH Node in EDGE NETWORK
const StyledProxyLine7 = styled(Line)`
  width: 40px;
  left: -116px;
  top: 193px;
`;
const StyledProxyLine8 = styled(Line)`
  width: 96px;
  left: -114px;
  top: 272px;
`;

//horizontal line to Web App in EDGE NETWORK
const StyledProxyLine9 = styled(Line)`
  width: 40px;
  left: -116px;
  bottom: 200px;
`;

// long GREEN vertical line in EDGE NETWORK
const StyledProxyLine10 = styled(Line)`
  height: 320px;
  left: -76px;
  bottom: 42px;
`;
const StyledProxyLine11 = styled(Line)`
  height: 186px;
  left: -2px;
  top: 49px;
`;
const StyledProxyLine12 = styled(Line)`
  width: 146px;
  left: -146px;
  top: 49px;
`;

//horizontal line to Desktop in EDGE NETWORK
const StyledProxyLine13 = styled(Line)`
  width: 40px;
  left: -116px;
  top: 512px;
`;

//horizontal line to Database in EDGE NETWORK
const StyledProxyLine14 = styled(Line)`
  width: 40px;
  left: -116px;
  bottom: 120px;
`;

// Audit Lines are RED

const StyledAuditArrow1 = styled(Arrow)`
  top: 127px;
  left: 102px;
`;

//Arrow from nodes to Auth in PRIVATE NETWORK
const StyledAuditArrow2 = styled(Arrow)`
  bottom: 270px;
  right: 222px;
`;

//Arrow from Proxy to Auth
const StyledAuditArrow3 = styled(Arrow)`
  bottom: 274px;
  left: 70px;
`;

//Arrow from K8s to Proxy in EDGE NETWORK
const StyledAuditArrow4 = styled(Arrow)`
  bottom: 274px;
  left: -40px;
`;
const StyledAuditLine1 = styled(Line)`
  height: 108px;
  left: 109px;
  top: 143px;
`;

//long vertical RED line in PRIVATE NETWORK
const StyledAuditLine2 = styled(Line)`
  height: 398px;
  right: 164px;
  bottom: 80px;
`;
const StyledAuditLine3 = styled(Line)`
  width: 24px;
  right: 140px;
  top: 158px;
`;
const StyledAuditLine4 = styled(Line)`
  width: 83px;
  right: 139px;
  top: 277px;
`;
const StyledAuditLine5 = styled(Line)`
  width: 24px;
  right: 140px;
  bottom: 80px;
`;

//horizontal line from Proxy to Auth
const StyledAuditLine6 = styled(Line)`
  width: 40px;
  left: 32px;
  top: 273px;
`;

//horizontal line to SSH Node in EDGE NETWORK
const StyledAuditLine7 = styled(Line)`
  width: 40px;
  left: -120px;
  top: 194px;
`;

//horizontal line to K8s in EDGE NETWORK
const StyledAuditLine8 = styled(Line)`
  width: 80px;
  left: -120px;
  top: 273px;
`;

//horizontal line to Web App in EDGE NETWORK
const StyledAuditLine9 = styled(Line)`
  width: 40px;
  left: -120px;
  bottom: 200px;
`;

//long RED vertical line in EDGE NETWORK
const StyledAuditLine10 = styled(Line)`
  height: 320px;
  left: -77px;
  bottom: 42px;
`;

//horiztontal line to Database in EDGE NETWORK
const StyledAuditLine11 = styled(Line)`
  width: 40px;
  left: -120px;
  bottom: 120px;
`;

//horiztontal line to Desktop in EDGE NETWORK
const StyledAuditLine12 = styled(Line)`
  width: 40px;
  left: -120px;
  bottom: 40px;
`;
//horiztontal line to Database in PRIVATE NETWORK
const StyledAuditLine13 = styled(Line)`
  width: 24px;
  right: 140px;
  bottom: 180px;
`;
//horiztontal line to SSH Node in PRIVATE NETWORK
const StyledAuditLine14 = styled(Line)`
  width: 24px;
  right: 140px;
  bottom: 476px;
`;

const StyledContainer = styled.div`
  height: 520px;
  position: relative;
  margin: 0 auto;
  width: 960px;
`;
const StyledInternet = styled(NetworkBox)`
  left: 0;
  height: 88px;
  width: 176px;
`;
const StyledEdge = styled(NetworkBox)`
  left: 0;
  top: 176px;
  height: 414px;
  width: 176px;
`;
const StyledNetwork = styled(NetworkBox)`
  left: 264px;
  height: 558px;
  width: 380px;
`;
const StyledAuditButton = styled(ServiceButton)`
  left: 80px;
`;

const SelectedTunnel = (props) => {
  if (props.selected) {
    return {
      filter: `drop-shadow(0 0 2px #651FFF)`,
    };
  }
};

// INTERNET ITEMS
const StyledTunnelImage = styled.img`
  position: absolute;
  cursor: pointer;
  right: -96px;
  bottom: 33px;
  margin: 0 !important;
  z-index: 1;
  ${SelectedTunnel}
`;
const StyledUsersButton = styled(DiagramButton)`
  position: absolute;
  left: 40px;
  top: 8px;
  max-width: 80px;
  z-index: 3;

  img {
    height: 50px;
  }
`;
const StyledNodeIButton = styled(DiagramButton)`
  position: absolute;
  left: 40px;
  bottom: 323px;
  z-index: 1;
`;
const StyledDatabaseIButton = styled(DiagramButton)`
  position: absolute;
  left: 38px;
  bottom: 78px;
  z-index: 1;
`;
const StyledK8SIButton = styled(DiagramButton)`
  position: absolute;
  left: 40px;
  bottom: 242px;
  z-index: 1;
`;
const StyledWepAppIButton = styled(DiagramButton)`
  position: absolute;
  left: 40px;
  bottom: 158px;
  z-index: 1;
`;

const StyledDesktopIButton = styled(DiagramButton)`
  position: absolute;
  left: 40px;
  bottom: 0px;
  z-index: 1;
`;

// PRIVATE NETWORK ITEMS
const StyledAuditLogButton = styled(DiagramButton)`
  position: absolute;
  left: 60px;
  top: 40px;
  width: 120px;
  z-index: 1;
`;
const StyledK8SPButton = styled(DiagramButton)`
  position: absolute;
  right: 40px;
  bottom: 314px;
  z-index: 1;
`;
const StyledNodePButton = styled(DiagramButton)`
  position: absolute;
  right: 40px;
  bottom: 418px;
  z-index: 1;
`;
const StyledWepAppPButton = styled(DiagramButton)`
  position: absolute;
  right: 40px;
  bottom: 216px;
  z-index: 1;
`;
const StyledDatabasePButton = styled(DiagramButton)`
  position: absolute;
  right: 40px;
  bottom: 116px;
  z-index: 1;
`;

const StyledDesktopPButton = styled(DiagramButton)`
  position: absolute;
  right: 40px;
  bottom: 20px;
  z-index: 1;
  h4 {
    white-space: nowrap;
  }
`;

export default StructureDiagram;
