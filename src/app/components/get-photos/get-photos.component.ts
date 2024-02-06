import { browserRefresh } from '../../app.component';
import { ImagesInfo } from './../../models/images';
import { GetPhotosService } from './../../services/get-photos.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-get-photos',
    templateUrl: './get-photos.component.html',
    styleUrls: ['./get-photos.component.scss'],
})
export class GetPhotosComponent implements OnInit {
    generatedImages = [] as any;
    value = '';
    breakpoint: number;
    btnGenerate = document.getElementById('btnGenerate');
    images = [
        {
            id: '1',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984184/Image%20Generator%20Landing%20Page%20Images/Hexagon_shaped_dress_Custom_v1ictv.png',
            alt: 'Image 3',
            cols: 2,
            rows: 2,
        },
        {
            id: '2',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984182/Image%20Generator%20Landing%20Page%20Images/Woman_in_dark_gown_ice_skating_outdoor_Custom_u0bwem.png',
            alt: 'Image 1',
            cols: 1,
            rows: 1,
        },
        {
            id: '3',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984189/Image%20Generator%20Landing%20Page%20Images/sparkly_ice_skating_light_oragne_Custom_f3l0ue.png',
            alt: 'Image 2',
            cols: 1,
            rows: 1,
        },

        {
            id: '4',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984189/Image%20Generator%20Landing%20Page%20Images/sparkly_ice_skating_light_oragne_Custom_f3l0ue.png',
            alt: 'Image 4',
            cols: 1,
            rows: 1,
        },
        {
            id: '5',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984188/Image%20Generator%20Landing%20Page%20Images/man_figure_skating_basic_painted_-_watermark_Custom_lwuw8p.png',
            alt: 'Image 5',
            cols: 1,
            rows: 1,
        },
        {
            id: '6',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984187/Image%20Generator%20Landing%20Page%20Images/img-5SvDORLe3zi0sPWQFMYGouLx_Custom_ksmxks.png',
            alt: 'Image 6',
            cols: 1,
            rows: 1,
        },
        {
            id: '7',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984186/Image%20Generator%20Landing%20Page%20Images/Ice_skating_during_sunset_Custom_flqlsk.png',
            alt: 'Image 7',
            cols: 2,
            rows: 2,
        },
        {
            id: '8',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984184/Image%20Generator%20Landing%20Page%20Images/Hexagon_shaped_dress_painted_Custom_rw0yna.png',
            alt: 'Image 8',
            cols: 1,
            rows: 1,
        },
        {
            id: '9',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984183/Image%20Generator%20Landing%20Page%20Images/Blonde_woman_ice_skating_in_cave_Custom_ypvqjo.png',
            alt: 'Image 12',
            cols: 1,
            rows: 2,
        },
        {
            id: '10',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984182/Image%20Generator%20Landing%20Page%20Images/black_woman_ice_skating_in_cave_Custom_aexb49.png',
            alt: 'Image 10',
            cols: 1,
            rows: 1,
        },
        {
            id: '11',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984182/Image%20Generator%20Landing%20Page%20Images/Woman_in_red_dress_with_laces_jumping_on_ice_Custom_sir6he.png',
            alt: 'Image 11',
            cols: 1,
            rows: 1,
        },
        {
            id: '12',
            url: 'https://res.cloudinary.com/doj6hcrgx/image/upload/v1704984182/Image%20Generator%20Landing%20Page%20Images/Woman_gracefully_spinning_on_the_ice_-_watermark_Custom_roytkr.png',
            alt: 'Image 11',
            cols: 1,
            rows: 1,
        },
    ];

    public browserRefresh: boolean;
    constructor(
        private getPhotosService: GetPhotosService,
        public userService: UserService
    ) {}

    ngOnInit() {
        this.breakpoint = window.innerWidth <= 480 ? 1 : 3;
    }

    generatePhotos = () => {
        this.userService.makeInteraction();
        const numOfInteractions = this.userService.userInteractions;
        this.getPhotosService
            .getPhotos(this.value, numOfInteractions)
            .subscribe((res) => {
                console.log('res', res);
                this.generatedImages = res.data.data;
            });
    };

    isButtonDisabled(): boolean {
        return this.userService.getUserInteractions() === 0;
    }

    onResize = (event: any) => {
        this.breakpoint = event.target.innerWidth <= 480 ? 1 : 3;
    };
}
