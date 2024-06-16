import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section>
        <app-home></app-home>
      </section>
    </main>
  `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'House Finder!';
}
