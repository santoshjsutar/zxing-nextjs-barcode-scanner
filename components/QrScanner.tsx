/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'; // If you're using Next.js 13+ with App Router

import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrScanner = ({ onScanSuccess, onScanFailure }: any) => {
  const scannerRef = useRef<any>(null);
  const scannerId = 'html5qr-code-full-region';

  useEffect(() => {
    if (!scannerRef.current) {
      const config = {
        fps: 70,
        qrbox: { width: 190, height: 70 },
      };

      const scanner = new Html5QrcodeScanner(scannerId, config, false);

      scanner.render(
        (decodedText, decodedResult) => {
          console.log('Scan Success:', decodedText);
          onScanSuccess(decodedText, decodedResult);
        },
        (errorMessage) => {
          if (onScanFailure) {
            onScanFailure(errorMessage);
          }
        }
      );

      scannerRef.current = scanner;
    }

    return () => {
      scannerRef.current?.clear().catch(console.error);
    };
  }, []);

  return <div id={scannerId} />;
};

export default QrScanner;
