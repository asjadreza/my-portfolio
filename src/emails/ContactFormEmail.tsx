import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Body style={{ backgroundColor: "#f6f9fc", padding: "20px" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "24px",
            border: "1px solid #eaeaea",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Heading style={{ fontSize: "22px", marginBottom: "12px" }}>
            📩 New Contact Form Submission
          </Heading>

          <Section style={{ marginBottom: "12px" }}>
            <Text style={{ fontSize: "16px" }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: "16px" }}>
              <strong>Email:</strong> {email}
            </Text>
          </Section>

          <Section>
            <Text style={{ fontSize: "16px", marginBottom: "4px" }}>
              <strong>Message:</strong>
            </Text>
            <Text style={{ whiteSpace: "pre-wrap", fontSize: "15px" }}>
              {message}
            </Text>
          </Section>

          <Text
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "#888",
              textAlign: "center",
            }}
          >
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
