'use client'

import React from 'react'
import type { ReactElement } from 'react'
import { Button } from '@nextui-org/button'
import { save } from '@tauri-apps/api/dialog';
import { writeBinaryFile } from '@tauri-apps/api/fs';
import axios from 'axios';
import { useAppDispatch } from "@/redux/hooks";
import { setPercentage, setBytesLoaded, setDownloadFinished, setFileSize, setFileName } from "@/redux/features/downloadSlice";

interface DownloadProps {
  id: number;
  fileName: string;
  size: string;
}

export default function Download({id, fileName, size}: DownloadProps): ReactElement {
  const dispatch = useAppDispatch();

  
  const downloadFile = async (selected: any) => {
    dispatch(setDownloadFinished(false))
    dispatch(setFileName(fileName))
    
    return axios({
      url: `${process.env.NEXT_PUBLIC_GAME_VAULT_URL}/api/v1/games/${id}/download`,
      auth: {
        username: `${process.env.NEXT_PUBLIC_GAME_VAULT_USERNAME}`,
        password: `${process.env.NEXT_PUBLIC_GAME_VAULT_PASSWORD}`
      },
      responseType: 'blob',
      onDownloadProgress(progressEvent) {
        const percentage = Math.round((progressEvent.loaded / parseInt(size)) * 100);
        dispatch(setBytesLoaded(progressEvent.loaded))
        dispatch(setPercentage(percentage))
        dispatch(setFileSize(parseInt(size)))
      }
    }).then(async response => {
      const arrayB = await response.data.arrayBuffer()
      await writeBinaryFile(selected, arrayB);
    }).catch(function (error) {
      throw new Error(error)
    }).finally(function () {
      dispatch(setDownloadFinished(true))
    });
  }

  const onClick = async () => {    
    const selected = await save({
      defaultPath: `${fileName}.7z`
    });

    if(!selected) return;

    downloadFile(selected)
  }
  
  return (
    <>
      <Button className="text-tiny" color="primary" radius="full" size="sm" onPress={onClick}>
        Download
      </Button>
    </>
  )
}
          