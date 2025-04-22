"use client";

import { useState, useCallback } from "react";
import { CheckCircle, Clipboard, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { codeExamples } from "./contant";

export default function CodeExampleGallery() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Sort examples alphabetically by description
  const sortedCodeExamples = [...codeExamples].sort((a, b) =>
    a.description.localeCompare(b.description)
  );

  const copyToClipboard = useCallback((code: string, index: number) => {
    const copyWithFallback = (text: string) => {
      if (navigator.clipboard?.writeText) {
        return navigator.clipboard.writeText(text);
      }

      // Fallback for older browsers
      return new Promise<void>((resolve, reject) => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom
        document.body.appendChild(textarea);
        textarea.select();

        try {
          document.execCommand("copy");
          resolve();
        } catch (err) {
          reject(err);
        } finally {
          document.body.removeChild(textarea);
        }
      });
    };

    copyWithFallback(code)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedCodeExamples.map((example, index) => (
            <Card
              key={index}
              className="h-full flex flex-col border border-gray-700 bg-gray-800 transition-all hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/10"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium text-gray-200">
                    {example.title}
                  </CardTitle>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                    {example.description}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  {example.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col pt-0">
                <div className="relative flex-1 group">
                  <div className="absolute inset-0 bg-gray-900 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                  <pre className="relative h-full p-4 overflow-auto">
                    <code className="block text-sm text-gray-300 font-mono whitespace-pre">
                      {example.code.slice(0, 150)}
                      {example.code.length > 150 && (
                        <span className="text-gray-500">...</span>
                      )}
                    </code>
                  </pre>

                  <Button
                    size="sm"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 hover:bg-gray-600 text-gray-300"
                    onClick={() => copyToClipboard(example.code, index)}
                  >
                    {copiedIndex === index ? (
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    ) : (
                      <Clipboard className="h-4 w-4 mr-2" />
                    )}
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </Button>
                </div>

                <Button
                  className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-gray-200 flex items-center justify-center"
                  onClick={() => copyToClipboard(example.code, index)}
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  {copiedIndex === index
                    ? "Copied to clipboard!"
                    : "Copy Full Code"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
