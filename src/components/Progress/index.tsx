'use client'

import React, { useState, useEffect } from "react";
import type { ReactElement } from "react";
import { Progress } from "@nextui-org/progress";
import {filesize} from "filesize";
import { useAppSelector } from "@/redux/hooks";

export default function ProgressBar(): ReactElement {
  const { percentage, bytesLoaded, finished, fileSize, fileName } = useAppSelector((state) => state.downloadReducer);
  const [show, setShow] = useState(false);

  useEffect(() => {

  }, [finished]);

  return (
    <div className={`absolute left-0 right-0 w-2/5 ml-auto mr-auto transition-opacity delay-[4000ms] bottom-4 
      ${finished ? 'opacity-0' : 'opacity-100'}
    `}>
      {
        bytesLoaded > 0 &&(
          <Progress
            label={finished ? 'Done' : `${fileName} - ${filesize(bytesLoaded)} / ${filesize(fileSize)}`}
            size="sm"
            value={percentage}
            color={finished ? "success" : "primary"}
            showValueLabel={true}
            className="w-full"
          />
        )
      }
    </div>
  );
}