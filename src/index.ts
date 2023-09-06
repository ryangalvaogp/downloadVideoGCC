import https from 'https';
import path from 'path';
import fs from 'fs';

import videos from "./videos.json";

type DownloadFileProps = {
    video: typeof videos[0]['videos'][0]
    type: ".mp4" | ".pdf"
    folderVideoPath: string
}

const videosDownloadFailed = [""];

main();

function main() {
    console.log("Download videos has finished.");
    downloadAllVideos()
        .then(e => {
            console.log("Download videos has finished.");
        })
}

async function downloadAllVideos() {
    videos.map(tema => {
        console.log(`Starting theme download ${tema}`);

        const foldersTemas = path.join(tema.tema);
        if (!fs.existsSync(foldersTemas)) fs.mkdirSync(foldersTemas);

        tema.videos.map(video => {
            const foldersVideos = path.join(tema.tema, video.name)
            if (!fs.existsSync(foldersVideos)) { fs.mkdirSync(foldersVideos) }

            downloadFile({ folderVideoPath: foldersVideos, type: '.mp4', video: video })
        })
    });

    if (videosDownloadFailed) console.log(videosDownloadFailed);
};

function downloadFile({
    folderVideoPath,
    type,
    video
}: DownloadFileProps) {
    const videoName = `${video.name}${type}`;
    const filePath = path.join(folderVideoPath, videoName);
    const file = fs.createWriteStream(filePath);

    console.log(`Downloading video ${videoName}`);
    const request = https.get(video.url, function (archive) {
        archive.pipe(file).addListener("close", () => {
            console.log(`${videoName} has been successfully downloaded.`);
        }).addListener("error", e => {
            console.log(`Error downloading ${videoName}`);
            videosDownloadFailed.push(videoName);
        });
    });

    return request;
}