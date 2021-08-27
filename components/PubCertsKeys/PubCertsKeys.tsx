import styled from "styled-components";
import css from "@styled-system/css";
import { Section, Flex, Box, Link } from "components";
import { Centrator } from "components/Layout";

export const PubCertsKeys = () => {
  return (
    <Section bg="grayGradient">
      <Centrator flexDirection="column" py={[3, 5]}>
        <Flex as="h2" fontSize="banner" lineHeight={["xl", "xxl"]}>
          Public Certificates &amp; Encryption Keys
        </Flex>
        <Box pb={3}>
          We use the following certificates and public keys to sign our
          software. Many of these keys and certificates use our legal business
          name “Gravitational Inc.” and our former domain “gravitational.com”.
          Don’t worry –{" "}
          <Link
            scheme="site"
            href="https://goteleport.com/blog/gravitational-is-teleport/"
          >
            Gravitational is Teleport
          </Link>
          .
        </Box>
        {/* eslint-disable-next-line */}
        <a id="pgp_key">
          <Box pb={3} fontWeight="bold" fontSize="header-4">
            Encrypting Email
          </Box>
        </a>
        <Box fontSize="text-lg">
          Please use the following public PGP key to encrypt sensitive
          information to{" "}
          <Link scheme="site" href="mailto:security@goteleport.com">
            security@goteleport.com
          </Link>
          .
        </Box>
        <ul>
          <li>
            ID <CodeSpan>BEEDA496</CodeSpan>
          </li>
          <li>
            Fingerprint{" "}
            <CodeSpan>
              24F1 C4E9 A718 FF7C FB0B 2F13 FF2E 90C4 BEED A496
            </CodeSpan>
          </li>
        </ul>
        <Box pb={3}>
          Download the{" "}
          <Link
            scheme="site"
            href="https://github.com/gravitational/teleport/blob/master/gravitational.asc"
          >
            security@gravitational.com public key.
          </Link>
        </Box>
        <Box pb={3} fontWeight="bold" fontSize="header-4">
          RPM &amp; Debian Signing Keys
        </Box>
        <Box fontSize="text-lg">
          We sign our{" "}
          <Link scheme="site" href="https://rpm.releases.teleport.dev/">
            RPM
          </Link>{" "}
          and{" "}
          <Link scheme="site" href="https://deb.releases.teleport.dev/">
            Debian
          </Link>{" "}
          repositories with the following PGP key:
        </Box>
        <ul>
          <li>
            ID <CodeSpan>6282C411</CodeSpan>
          </li>
          <li>
            Fingerprint{" "}
            <CodeSpan>
              0C5E 8BA5 658E 320D 1B03 1179 C87E D53A 6282 C411
            </CodeSpan>
          </li>
        </ul>
        <Box pb={3}>
          The key is available for download at:
          <ul>
            <li>
              <Link
                scheme="site"
                href="https://deb.releases.teleport.dev/teleport-pubkey.asc"
              >
                https://deb.releases.teleport.dev/teleport-pubkey.asc
              </Link>
            </li>
            <li>
              <Link
                scheme="site"
                href="https://rpm.releases.teleport.dev/RPM-GPG-KEY-teleport"
              >
                https://rpm.releases.teleport.dev/RPM-GPG-KEY-teleport
              </Link>
            </li>
          </ul>
        </Box>
        <Box pb={3}>
          See the following pages for information on using this key to verify
          downloaded packages:
          <ul>
            <li>
              <Link scheme="site" href="https://deb.releases.teleport.dev/">
                https://deb.releases.teleport.dev/
              </Link>
            </li>
            <li>
              <Link scheme="site" href="https://rpm.releases.teleport.dev/">
                https://rpm.releases.teleport.dev/
              </Link>
            </li>
          </ul>
        </Box>

        <Box pb={3} fontWeight="bold" fontSize="header-4">
          Apple Signing Certificates
        </Box>
        <Box fontSize="text-lg">
          Our Apple packages and binaries are{" "}
          <Link
            scheme="site"
            href="https://developer.apple.com/support/code-signing/"
          >
            code signed
          </Link>{" "}
          with the following certificate:
        </Box>
        <ul>
          <li>
            Developer ID <CodeSpan>QH8AA5B8UP</CodeSpan> Gravitational Inc.
          </li>
          <li>
            Fingerprint{" "}
            <CodeSpan>
              D2 70 EA 0C F2 0E CB 17 28 B2 21 E1 D5 B6 7C FE 50 FF AB 62
            </CodeSpan>
          </li>
        </ul>
        <Box pb={3}>
          Verify the Developer ID and fingerprint match on package downloads
          with <CodeSpan>pkgutil</CodeSpan>
        </Box>
        <CodeBlock>
          {`
$ pkgutil --check-signature teleport-7.0.0-beta.5.pkg
Package "teleport-7.0.0-beta.5.pkg":
    Status: signed by a certificate trusted by Mac OS X
    Certificate Chain:
    1.  Developer ID Installer: Gravitational Inc. (QH8AA5B8UP)
        SHA1 fingerprint: D2 70 EA 0C F2 0E CB 17 28 B2 21 E1 D5 B6 7C FE 50 FF AB 62
        -----------------------------------------------------------------------------
    2.  Developer ID Certification Authority
        SHA1 fingerprint: 3B 16 6C 3B 7D C4 B7 51 C9 FE 2A FA B9 13 56 41 E3 88 E1 86
        -----------------------------------------------------------------------------
    3.  Apple Root CA
        SHA1 fingerprint: 61 1E 5B 66 2C 59 3A 08 FF 58 D1 4A E2 24 52 D1 98 DF 6C 60
          `}
        </CodeBlock>
        <Box pb={3}>
          The <CodeSpan>codesign</CodeSpan> tool can be used to perform the
          verification on individual binaries:
        </Box>
        <CodeBlock>
          {`
$ codesign --verify -d --verbose=2 /usr/local/bin/tsh 
...
Authority=Developer ID Application: Gravitational Inc. (QH8AA5B8UP)
Authority=Developer ID Certification Authority 
Authority=Apple Root CA 
Timestamp=Jul 30, 2021 at 1:44:06 PM 
Info.plist=not bound 
TeamIdentifier=QH8AA5B8UP 
...
          `}
        </CodeBlock>
        <Box pb={3}>
          The Teleport package in Homebrew is not maintained or signed by
          Teleport. We recommend the use of{" "}
          <Link scheme="site" href="https://goteleport.com/teleport/download">
            our Teleport packages
          </Link>
          .
        </Box>
        <Box py={3} fontWeight="bold" fontSize="header-4">
          Windows Signing Certificates
        </Box>
        <Box fontSize="text-lg">
          Our Windows binaries are signed with the following certificate:
        </Box>
        <ul>
          <li>Issued to Gravitational Inc.</li>
          <li>
            Thumbprint{" "}
            <CodeSpan>F2FBE7B8228122EB74DE2DC093DB81F8E6896253</CodeSpan>
          </li>
        </ul>
        <Box pb={3}>
          Verify the binary using the following PowerShell command:
        </Box>
        <CodeBlock>
          {`
Get-AuthenticodeSignature -FilePath .\\tsh.exe

    Directory: C:\\Users\\ExampleUser

SignerCertificate                         Status   Path
-----------------                         ------   ----
F2FBE7B8228122EB74DE2DC093DB81F8E6896253  Valid    tsh.exe
        `}
        </CodeBlock>
        <Box pb={3}>
          Ensure that the <CodeSpan>SignerCertificate</CodeSpan> matches the
          thumbprint shown above, and that the <CodeSpan>Status</CodeSpan> field
          is <CodeSpan>Valid</CodeSpan>.
        </Box>
        <Box pb={3}>
          To further inspect the certificate, run the following PowerShell
          command:
        </Box>
        <CodeBlock>
          {`
(Get-AuthenticodeSignature -FilePath.\\tsh.exe).SignerCertificate | Format-List

Subject       : CN=Gravitational Inc., O=Gravitational Inc., L=Oakland, S=California, C=US
Issuer        : CN=DigiCert SHA2 Assured ID Code Signing CA, OU=www.digicert.com, O=DigiCert Inc, C=US
Thumbprint    : F2FBE7B8228122EB74DE2DC093DB81F8E6896253
FriendlyName  :
NotBefore     : 11/8/2020 5:00:00 PM
NotAfter      : 11/14/2023 4:59:59 PM
Extensions    : {System.Security.Cryptography.Oid, System.Security.Cryptography.Oid, System.Security.Cryptography.Oid, System.Security.Cryptography.Oid...}
         `}
        </CodeBlock>
        <Box pb={3}>
          Alternatively, Windows binaries may be inspected graphically via the
          Windows Explorer with the following steps:
        </Box>
        <ol>
          <li>
            Right click on the binary in question, for example{" "}
            <CodeSpan>tsh.exe</CodeSpan>.
          </li>
          <li>Select &ldquo;Properties&rdquo;.</li>
          <li>
            On the resulting &ldquo;tsh.exe Properties&rdquo; dialog, select the
            &ldquo;Digital Signatures&rdquo; tab.
          </li>
          <li>
            Select the &ldquo;Gravitational Inc.&rdquo; signer from the list.
          </li>
          <li>Select the &ldquo;Details&rdquo; button.</li>
          <li>
            On the resulting &ldquo;Digital Signature Details&rdquo; dialog,
            ensure that the header states &ldquo;This digital signature is
            OK.&rdquo;
          </li>
          <li>Select the &ldquo;View Certificate&rdquo; button.</li>
          <li>
            On the resulting &ldquo;Certificate&rdquo; dialog, select the
            &ldquo;Details&rdquo; tab.
          </li>
          <li>
            Select the &ldquo;Thumbprint&rdquo; item from the list, and compare
            its value to the thumbprint listed above.
          </li>
        </ol>
      </Centrator>
    </Section>
  );
};

const CodeSpan = styled("span")(
  css({
    backgroundColor: "lighter-gray",
  })
);

const CodeBlock = styled(Flex)(
  css({
    mb: 3,
    px: 3,
    background: "black",
    color: "white",
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
  })
);
