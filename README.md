
# DownloadVideoGCC

I developed this node.js script that downloads several videos from the internet. It was dedicated to an online course platform that was not originally adapted for downloads, impacting the experience routine, in which downloads were not at all favorable both due to the large number of videos, themes and modules and to the factors of internet speed, computational processing impacted by browsers, etc.

It is open for contributions. Contact me.


## Installation

After cloning this repository, install the downloadVideoGCC dependencies with npm with the following command:

```bash
  npm install
 
  ou

  yarn
```
## Use

First make sure that the video.json has the following structure:

````json
[
    {
        "tema":"",
        "videos":[
            {
                "name":"",
                "url":"",
                "slide":""
            },
            .................
        ]
    }
]
````

Then have the theme (name of the main folder), name of the video (file name) and the raw link of the video. If this structure is modified, you will have to adapt the code to receive the new structure.

After that, just run `yarn start` or `npm start` to run it.

## Author

- [@ryan.gwalchmei](https://www.github.com/ryangalvaogp)


## License

[MIT](https://choosealicense.com/licenses/mit/)

