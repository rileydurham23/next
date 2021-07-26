import deselectCharacter from "./deselect-character";

describe("utils/deselectCharacter", () => {
  it("case 1: single line code", () => {
    const result = deselectCharacter(
      "$",
      "$ docker exec teleport tctl users add testuser --roles=editor,access --logins=root,ubuntu,ec2-user"
    );

    expect(result).toEqual(
      "docker exec teleport tctl users add testuser --roles=editor,access --logins=root,ubuntu,ec2-user"
    );
  });

  it("case 2: '#' commented text followed with single line code", () => {
    const result = deselectCharacter(
      "$",
      `# Create local config and data directories for teleport, which will be mounted into the container
       $ mkdir -p ~/teleport/config ~/teleport/data`
    );

    expect(result).toEqual(
      `# Create local config and data directories for teleport, which will be mounted into the container
       mkdir -p ~/teleport/config ~/teleport/data`
    );
  });

  it("case 3: complex series of commented and command texts", () => {
    const result = deselectCharacter(
      "$",
      `# Create local config and data directories for teleport, which will be mounted into the container
       $ mkdir -p ~/teleport/config ~/teleport/data
      
      # Generate a sample teleport config and write it to the local config directory.
      # This container will write the config and immediately exit - this is expected.
      $ docker run --hostname localhost --rm \
        --entrypoint=/bin/sh \
        -v ~/teleport/config:/etc/teleport \
        quay.io/gravitational/teleport:6 -c "teleport configure > /etc/teleport/teleport.yaml"
      
      # Start teleport with mounted config and data directories, plus all ports
      $ docker run --hostname localhost --name teleport \
        -v ~/teleport/config:/etc/teleport \
        -v ~/teleport/data:/var/lib/teleport \
        -p 3023:3023 -p 3025:3025 -p 3080:3080 \
        quay.io/gravitational/teleport:6`
    );

    expect(result).toEqual(
      `# Create local config and data directories for teleport, which will be mounted into the container
       mkdir -p ~/teleport/config ~/teleport/data
      
      # Generate a sample teleport config and write it to the local config directory.
      # This container will write the config and immediately exit - this is expected.
      docker run --hostname localhost --rm \
        --entrypoint=/bin/sh \
        -v ~/teleport/config:/etc/teleport \
        quay.io/gravitational/teleport:6 -c "teleport configure > /etc/teleport/teleport.yaml"
      
      # Start teleport with mounted config and data directories, plus all ports
      docker run --hostname localhost --name teleport \
        -v ~/teleport/config:/etc/teleport \
        -v ~/teleport/data:/var/lib/teleport \
        -p 3023:3023 -p 3025:3025 -p 3080:3080 \
        quay.io/gravitational/teleport:6`
    );
  });

  it("case 4: test if it does not break non-code texts", () => {
    const result = deselectCharacter(
      "$",
      `WARNING: You are using insecure connection to SSH proxy https://localhost:3080
      > Profile URL:        https://localhost:3080
        Logged in as:       testuser
        Cluster:            localhost
        Roles:              admin
        Logins:             root, ubuntu
        Kubernetes:         disabled
        Valid until:        2021-06-10 07:15:42 -0500 CDT [valid for 12h0m0s]
        Extensions:         permit-agent-forwarding, permit-port-forwarding, permit-pty`
    );

    expect(result).toEqual(
      `WARNING: You are using insecure connection to SSH proxy https://localhost:3080
      > Profile URL:        https://localhost:3080
        Logged in as:       testuser
        Cluster:            localhost
        Roles:              admin
        Logins:             root, ubuntu
        Kubernetes:         disabled
        Valid until:        2021-06-10 07:15:42 -0500 CDT [valid for 12h0m0s]
        Extensions:         permit-agent-forwarding, permit-port-forwarding, permit-pty`
    );
  });
});
