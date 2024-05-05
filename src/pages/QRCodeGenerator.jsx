import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QRCode from "react-qr-code";
import { useState } from "react";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div
      className={`container flex flex-col flex-1 items-center justify-center gap-8 my-10 w-full max-h-screen relative overflow-x-hidden`}
    >
      <h1>QR Code Generator</h1>
      <div className="flex gap-3">
        <Input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <Button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </Button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="transparent"
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
