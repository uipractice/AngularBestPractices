import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilesreadService {

  constructor(public http: HttpClient) {

  }
  async getFileDataAsync(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url, { responseType: 'text' }).subscribe(data => {
        // console.log(data);
        resolve(data)
      })
    }).catch((err) => console.error(err))

  }
}
