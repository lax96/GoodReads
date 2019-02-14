import { AuthGuard } from './../core/AuthGuard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenreComponent } from './genre/genre.component';
import { ExploreGenreComponent } from './explore-genre/explore-genre.component';

const bookRouting: Routes = [
    { path: 'genre', component: GenreComponent, canActivate: [AuthGuard] },
    { path: 'explore-genre/:id', component: ExploreGenreComponent, canActivate: [AuthGuard] },
];

@NgModule({
    declarations: [
    ],
    imports: [
        RouterModule.forChild(bookRouting)
    ],
    exports: [RouterModule]
})

export class BookRoutingModule {

}