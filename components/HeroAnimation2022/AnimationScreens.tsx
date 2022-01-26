import Flex from "components/Flex";
import styled from "styled-components";

type infra =
  | "servers"
  | "databases"
  | "kubernetes"
  | "applications"
  | "desktops"
  | "activity"
  | "teams";

interface AnimationScreensProps {
  screen1: infra;
}

const AnimationScreens = ({ screen1 }: AnimationScreensProps) => {
  const screen = {
    servers: <Servers />,
    databases: <Databases />,
    kubernetes: <K8s />,
    applications: <Flex height={320} width={440} bg="light-gray" />,
    desktops: <Flex height={320} width={440} bg="light-gray" />,
    activity: <Flex height={320} width={440} bg="light-gray" />,
    teams: <Flex height={320} width={440} bg="light-gray" />,
  };

  return screen[screen1];
};

// K8S TABLE
const K8s = () => {
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
            <td>eks-stg-cluster</td>
            <td className="is-hidden-mobile">
              <span className="label">renv: stg2</span>
              <span className="label">region: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>eks-prod-cluster</td>
            <td className="is-hidden-mobile">
              <span className="label">env:prod</span>
              <span className="label">region:us-east-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>galactus</td>
            <td className="is-hidden-mobile">
              <span className="label">env:prod</span>
              <span className="label">microservice:entropy-service</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>eks-dev-cluster</td>
            <td className="is-hidden-mobile">
              <span className="label">env:stg</span>
              <span className="label">region:us-east-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>galaxy</td>
            <td className="is-hidden-mobile">
              <span className="label">env:prod</span>
              <span className="label">microservice:entropy-service</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
};

// DATABASE TABLE
const Databases = () => {
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
            <td>aurora</td>
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
            <td>mogodb</td>
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
            <td>webapp</td>
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
            <td>bizops</td>
            <td>RDS MySQL</td>
            <td className="is-hidden-mobile">
              <span className="label">env: prod</span>
              <span className="label">mysql</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>

          <tr>
            <td>mongodb-atlas</td>
            <td>Self-hosted MongoDB</td>
            <td className="is-hidden-mobile">
              <span className="label">env: dev-2</span>
              <span className="label">mongodb</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
};

// SERVER TABLE
const Servers = () => {
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
            <td>ip-10-0-0-115</td>
            <td>127.0.0.2:3022</td>
            <td className="is-hidden-mobile">
              <span className="label">hostname: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>ip-10-0-0-115</td>
            <td>127.0.0.2:3022</td>
            <td className="is-hidden-mobile">
              <span className="label">hostname: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>ip-10-0-0-115</td>
            <td>127.0.0.2:3022</td>
            <td className="is-hidden-mobile">
              <span className="label">hostname: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>ip-10-0-0-115</td>
            <td>127.0.0.2:3022</td>
            <td className="is-hidden-mobile">
              <span className="label">hostname: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
          <tr>
            <td>ip-10-0-0-115</td>
            <td>127.0.0.2:3022</td>
            <td className="is-hidden-mobile">
              <span className="label">hostname: us-west-2</span>
            </td>
            <td>
              <button>Connect</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
};

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

    td,
    th {
      border-bottom: 1px solid #f5f5f6;

      &:last-child {
        border: none;
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
      padding: 8px 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

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
