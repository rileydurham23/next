import styled from "styled-components";
import rdsImg from "./assets/logos/aws-rds.svg";
import mongoImg from "./assets/logos/mongodb.svg";
import gcpImg from "./assets/logos/gcp.svg";
import cockroachImg from "./assets/logos/cockroachdb.svg";
import mysqlImg from "./assets/logos/mysql.svg";
import grafanaImg from "./assets/logos/grafana.svg";
import jenkinsImg from "./assets/logos/jenkins.svg";
import gitlabImg from "./assets/logos/gitlab.svg";
import awsImg from "./assets/logos/aws.svg";
import metabaseImg from "./assets/logos/metabase.svg";
import windowsImg from "./assets/logos/windows.svg";
import k8sImg from "./assets/logos/k8s.svg";
import Flex from "components/Flex";
import Icon from "components/Icon";

const AnimationScreens = [
  <Servers key={"Servers"} />,
  <Databases key={"Databases"} />,
  <K8s key={"K8s"} />,
  <Applications key={"Applications"} />,
  <Desktops key={"Desktops"} />,
  <Activity key={"Activity"} />,
  <Team key={"Team"} />,
];

// TEAM TABLE
function Activity() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Node</th>
            <th>User(s)</th>
            <th className="is-hidden-mobile">Duration</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="window" size="sm" mr={2} /> ip-10-0-0-51
              </Flex>
            </td>
            <td>alice</td>
            <td className="is-hidden-mobile">5 mins</td>
            <td>
              <button className="play">Play</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="window" size="sm" mr={2} /> ip-10-0-0-120
              </Flex>
            </td>
            <td>bob</td>
            <td className="is-hidden-mobile">7 mins</td>
            <td>
              <button className="play">Play</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="window" size="sm" mr={2} /> ip-10-0-0-51
              </Flex>
            </td>
            <td>slack-plugin</td>
            <td className="is-hidden-mobile">10 mins</td>
            <td>
              <button className="play">Play</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="window" size="sm" mr={2} /> ip-10-0-0-22
              </Flex>
            </td>
            <td>terraform</td>
            <td className="is-hidden-mobile">5 mins</td>
            <td>
              <button className="play">Play</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="window" size="sm" mr={2} /> ip-10-0-0-120
              </Flex>
            </td>
            <td>eve</td>
            <td className="is-hidden-mobile">7 mins</td>
            <td>
              <button className="play">Play</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

// TEAM TABLE
function Team() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Roles</th>
            <th className="is-hidden-mobile">Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="team" size="sm" mr={2} /> alice
              </Flex>
            </td>
            <td>
              <span className="label">access</span>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">Github</span>
            </td>
            <td>
              <button>Options</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="team" size="sm" mr={2} /> bob
              </Flex>
            </td>
            <td>
              <span className="label">access</span>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">Github</span>
            </td>
            <td>
              <button>Options</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="team" size="sm" mr={2} /> terraform
              </Flex>
            </td>
            <td>
              <span className="label">terraform</span>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">Local User</span>
            </td>
            <td>
              <button>Options</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="team" size="sm" mr={2} /> slack-plugin
              </Flex>
            </td>
            <td>
              <span className="label">slack</span>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">Local User</span>
            </td>
            <td>
              <button>Options</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="team" size="sm" mr={2} /> eve
              </Flex>
            </td>
            <td>
              <span className="label">access</span>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">Local User</span>
            </td>
            <td>
              <button>Options</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

// APPLICATIONS TABLE
function Applications() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th className="is-hidden-mobile">Labels</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <img width="20" src={awsImg} alt="aws" /> aws
              </Flex>
            </td>
            <td>https://dev.teleport-8.earth</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={grafanaImg} alt="grafana" /> grafana
              </Flex>
            </td>
            <td>https://grafana.teleport-8.earth</td>
            <td className="is-hidden-mobile">
              <span className="label">env: work</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="20" src={jenkinsImg} alt="RDS" /> jenkins
              </Flex>
            </td>
            <td>https://jenkins.teleport-8.earth</td>
            <td className="is-hidden-mobile">
              <span className="label">env: work</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="20" src={metabaseImg} alt="metabase" /> metabase
              </Flex>
            </td>
            <td>https://meta.teleport-8.earth</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img width="20" src={gitlabImg} alt="gitlab" /> gitlab
              </Flex>
            </td>
            <td>https://gitlab.teleport-8.earth</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

// DESKTOPS TABLE
function Desktops() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Name</th>
            <th className="is-hidden-mobile">Labels</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <img height="16" src={windowsImg} alt="windows" /> 10.0.0.10
              </Flex>
            </td>
            <td>Windows</td>
            <td className="is-hidden-mobile">
              <span className="label">name: Base</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="16" src={windowsImg} alt="windows" /> 10.0.40.10
              </Flex>
            </td>
            <td>Windows Prod</td>
            <td className="is-hidden-mobile">
              <span className="label">name: Prod</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="16" src={windowsImg} alt="windows" /> 10.0.32.10
              </Flex>
            </td>
            <td>Windows Dev</td>
            <td className="is-hidden-mobile">
              <span className="label">name: Dev</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="16" src={windowsImg} alt="windows" /> 10.0.130.2
              </Flex>
            </td>
            <td>Windows Bizops</td>
            <td className="is-hidden-mobile">
              <span className="label">name: Biz</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="16" src={windowsImg} alt="windows" /> 10.0.157.72
              </Flex>
            </td>
            <td>Windows Sys</td>
            <td className="is-hidden-mobile">
              <span className="label">name: Sys</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

// K8S TABLE
function K8s() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="is-hidden-mobile">Labels</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={k8sImg} alt="Kubernetes" />{" "}
                eks-stg-cluster
              </Flex>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">env: stg2</span>
              <span className="label">region: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={k8sImg} alt="Kubernetes" />{" "}
                eks-prod-cluster
              </Flex>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">env:prod</span>
              <span className="label">region:us-east-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={k8sImg} alt="Kubernetes" /> galactus
              </Flex>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">env:prod</span>
              <span className="label">entropy-service</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={k8sImg} alt="Kubernetes" />{" "}
                eks-dev-cluster
              </Flex>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">env:stg</span>
              <span className="label">region:us-east-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={k8sImg} alt="Kubernetes" /> galaxy
              </Flex>
            </td>
            <td className="is-hidden-mobile">
              <span className="label">env:stg</span>
              <span className="label">EKS</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

// DATABASE TABLE
function Databases() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th className="is-hidden-mobile">Labels</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <img height="18" src={rdsImg} alt="RDS" /> aurora
              </Flex>
            </td>
            <td>RDS PostgreSQL</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev</span>
              <span className="label">postgres</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="24" src={mongoImg} alt="Mongodb" /> mongodb
              </Flex>
            </td>
            <td>Self-hosted MongoDB</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev-1</span>
              <span className="label">mongodb</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img width="20" src={gcpImg} alt="Google Cloud" />
                gcloud
              </Flex>
            </td>
            <td>GCP SQL Postgres</td>
            <td className="is-hidden-mobile">
              <span className="label">env: prod</span>
              <span className="label">sql</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="20" src={cockroachImg} alt="Cockroachdb" />{" "}
                Cockroach
              </Flex>
            </td>
            <td>Self-hosted CockroachDB</td>
            <td className="is-hidden-mobile">
              <span className="label">env: prod</span>
              <span className="label">crdb</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>
              <Flex alignItems="center">
                <img height="20" src={mysqlImg} alt="MySQL" /> mysql
              </Flex>
            </td>
            <td>Self-hosted Mysql</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev-2</span>
              <span className="label">mysql</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

// SERVER TABLE
function Servers() {
  return (
    <StyledTable>
      <header>
        <input type="search" placeholder="Search..." />
      </header>

      <table>
        <thead>
          <tr>
            <th>Hostname</th>
            <th>Address</th>
            <th className="is-hidden-mobile">Labels</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="server" size="sm" mr={2} /> ip-10-0-0-115
              </Flex>
            </td>
            <td>⟵ tunnel</td>
            <td className="is-hidden-mobile">
              <span className="label">region: us-west-1</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="server" size="sm" mr={2} /> ip-10-0-0-20
              </Flex>
            </td>
            <td>⟵ tunnel</td>
            <td className="is-hidden-mobile">
              <span className="label">region: sa-east-1</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="server" size="sm" mr={2} /> ip-10-0-0-60
              </Flex>
            </td>
            <td>⟵ tunnel</td>
            <td className="is-hidden-mobile">
              <span className="label">region: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="server" size="sm" mr={2} /> ip-10-0-0-85
              </Flex>
            </td>
            <td>⟵ tunnel</td>
            <td className="is-hidden-mobile">
              <span className="label">region: eu-west-1</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>
              <Flex alignItems="center">
                <Icon name="server" size="sm" mr={2} /> ip-10-0-0-90
              </Flex>
            </td>
            <td>⟵ tunnel</td>
            <td className="is-hidden-mobile">
              <span className="label">region: us-east-1</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

const StyledTable = styled("div")`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  margin: 24px;
  overflow: hidden;

  @media (max-width: 800px) {
    margin: 16px;

    .is-hidden-mobile {
      display: none;
    }
  }

  header {
    padding: 8px;

    input {
      background: #f5f5f6;
      border-radius: 100px;
      border: none;
      box-sizing: border-box;
      font-size: 11px;
      color: #aab8c1;
      line-height: 24px;
      outline: none;
      padding: 0 16px;
      width: 160px;

      // PLACEHOLDER TEXT
      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #aab8c1;
      }
      &::-moz-placeholder {
        /* Firefox 19+ */
        color: #aab8c1;
      }
      &:-ms-input-placeholder {
        /* IE 10+ */
        color: #aab8c1;
      }
      &:-moz-placeholder {
        /* Firefox 18- */
        color: #aab8c1;
      }
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;

    tr:last-child {
      td,
      th {
        border-bottom: none;
      }
    }

    td,
    th {
      border-bottom: 1px solid #f5f5f6;
      vertical-align: middle;

      &:last-child {
        text-align: right;
        width: 80px;
      }
    }

    th {
      background: #f5f5f6;
      color: #aab8c1;
      line-height: 16px;
      font-size: 9px;
      padding: 0 16px;
      text-transform: uppercase;
      text-align: left;

      @media (max-width: 1080px) {
        padding: 0 8px;
      }
    }

    td {
      color: #adbcc4;
      font-size: 9px;
      padding: 10px 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      img {
        margin-right: 8px;
      }

      @media (max-width: 1080px) {
        padding: 16px 8px;
      }

      @media (max-width: 800px) {
        padding: 8px;
      }

      .label {
        background: #f6f8f9;
        display: inline-block;
        border-radius: 100px;
        color: #607d8b;
        line-height: 16px;
        padding: 0 8px;
      }

      button {
        background: #fff;
        border-radius: 4px;
        border: 1px solid #d2dbdf;
        color: #607d8b;
        font-size: 9px;
        line-height: 24px;
        height: 24px;
        box-sizing: border-box;
        padding: 0 16px;

        @media (max-width: 800px) {
          padding: 0 8px;
        }
      }
    }
  }
`;

export default AnimationScreens;
