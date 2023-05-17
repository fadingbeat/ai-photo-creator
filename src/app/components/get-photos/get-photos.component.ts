import { ImagesInfo } from './../../models/images';
import { GetPhotosService } from './../../services/get-photos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-get-photos',
    templateUrl: './get-photos.component.html',
    styleUrls: ['./get-photos.component.scss'],
})
export class GetPhotosComponent implements OnInit {
    generatedImages = [] as any;
    value = '';
    constructor(private getPhotosService: GetPhotosService) {}

    ngOnInit() {
        // this.generatePhotos();
    }

    generatePhotos = () => {
        this.getPhotosService.createPhotos(this.value).then(
            (res) => {
                this.generatedImages = res.data.data;
            },
            (err) => console.log('Error', err)
        );
    };
}
