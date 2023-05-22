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
    breakpoint: number;
    images = [
        {
            id: '3',
            url: 'assets/softwaredev.png',
            alt: 'Image 3',
            cols: 2,
            rows: 2,
        },
        {
            id: '1',
            url: 'assets/angel.png',
            alt: 'Image 1',
            cols: 1,
            rows: 1,
        },
        {
            id: '2',
            url: 'assets/figureskater.png',
            alt: 'Image 2',
            cols: 1,
            rows: 1,
        },

        {
            id: '4',
            url: 'assets/Discussion.png',
            alt: 'Image 4',
            cols: 1,
            rows: 1,
        },
        {
            id: '5',
            url: 'assets/Neurologist.png',
            alt: 'Image 5',
            cols: 1,
            rows: 1,
        },
        {
            id: '6',
            url: 'assets/peaceful.png',
            alt: 'Image 6',
            cols: 1,
            rows: 1,
        },
        {
            id: '7',
            url: 'assets/pushups.png',
            alt: 'Image 7',
            cols: 2,
            rows: 2,
        },
        {
            id: '8',
            url: 'assets/quad.png',
            alt: 'Image 8',
            cols: 1,
            rows: 1,
        },
        {
            id: '12',
            url: 'assets/yoga.png',
            alt: 'Image 12',
            cols: 1,
            rows: 2,
        },
        {
            id: '10',
            url: 'assets/sunset.png',
            alt: 'Image 10',
            cols: 1,
            rows: 1,
        },
        {
            id: '11',
            url: 'assets/massage.png',
            alt: 'Image 11',
            cols: 1,
            rows: 1,
        },
        {
            id: '11',
            url: 'assets/soundhealing.png',
            alt: 'Image 11',
            cols: 1,
            rows: 1,
        },
    ];
    constructor(private getPhotosService: GetPhotosService) {}

    ngOnInit() {
        this.breakpoint = window.innerWidth <= 480 ? 1 : 3;
    }

    generatePhotos = () => {
        this.getPhotosService.createPhotos(this.value).then(
            (res) => {
                this.generatedImages = res.data.data;
            },
            (err) => console.log('Error', err)
        );
    };

    onResize = (event: any) => {
        this.breakpoint = event.target.innerWidth <= 480 ? 1 : 3;
    };
}
