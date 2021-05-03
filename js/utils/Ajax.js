class ajax {
    static get(url, async) {
        let http = new XMLHttpRequest();
        http.open('GET', url, async);
        http.send();
        return http.responseText;
    }
}