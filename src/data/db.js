import KintoClient from "kinto-client";

let client = new KintoClient("https://kinto.dev.mozaws.net/v1");
client.defaultReqOptions.headers = {
    Authorization: 'Basic ' + btoa('user:pass')
};

export function listBuckets() {
    client.listBuckets().then(({data}) => console.log(data));
}