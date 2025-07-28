/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import dynamic from 'next/dynamic';
// import { useState } from "react";
// import { useZxing, Result } from "react-zxing";

// const QrScanner = dynamic(() => import('../components/QrScanner'), { ssr: false });
import QrScanner from '../components/QrScanner';
export default function Home() {
  // const [text, setText] = useState<string>("");
  // const {
  //   ref: videoRef,
  //   torch: {
  //     on: torchOn,
  //     off: torchOff,
  //     isOn: torchIsOn,
  //     isAvailable: torchAvailable,
  //   },
  // } = useZxing({
  //   onDecodeResult(result: Result) {
  //     setText(result.getText());
  //   },
  //   onDecodeError(error: Error) {
  //     console.error("Decode failed:", error);
  //   },
  //   constraints: { video: { facingMode: "environment" } },
  //   timeBetweenDecodingAttempts: 500,
  // });

  const handleScanSuccess = (text: any, result: any) => {
    alert(`Scanned: ${text}`);
    console.log('Full result:', result);
  };

  const handleScanFailure = (error: any) => {
    console.warn(`Scan error: ${error}`);
  };

  return (
    <div>
      {/* <video ref={videoRef} style={{ width: "100%", maxWidth: 400 }} />
      {torchAvailable && (
        <button onClick={() => (torchIsOn ? torchOff() : torchOn())}>
          {torchIsOn ? "🔦 Turn off torch" : "🔦 Turn on torch"}
        </button>
      )}
      <p>
        Decoded text: <strong>{text}</strong>
      </p> */}

      <QrScanner onScanSuccess={handleScanSuccess} onScanFailure={handleScanFailure} />
    </div>
  );
  // return (
  //   <>
  //     <div className="p-10 flex justify-center items-center bg-black">
  //       {/* <QRCodeSVG
  //       value={qrCodeValue}
  //       size={256}
  //       fgColor={"#ffffff"}
  //       bgColor={"#000000"}
  //       imageSettings={
  //         false ? { src: "", height: 50, width: 50, excavate: true } : undefined
  //         }
  //         /> */}

  //     </div>
  //     <div className="w-[800px] h-[300px]">

  //       {/* <BarcodeScanner
  //         //  options?: ScanOptions;
  //         onCapture={(barcodes: DetectedBarcode[]) => {
  //           alert(JSON.stringify(barcodes))
  //         }}
  //       // trackConstraints?: MediaTrackConstraints;
  //       // paused?: boolean;
  //       /> */}
  //     </div>
  //   </>
  // );
}
