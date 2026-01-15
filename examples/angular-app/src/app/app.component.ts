import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lux-scope density="comfortable" main-color="#0ea5e9">
      <lux-heading level="1">Lux Angular Example</lux-heading>
      <lux-card variant="elevated">
        <lux-heading level="3" slot="header">Card Title</lux-heading>
        <lux-text>This is a card with Lux components in Angular.</lux-text>
        <lux-button variant="primary" slot="footer">Action</lux-button>
      </lux-card>
      <lux-tabs>
        <lux-tab label="Tab 1">
          <lux-text>Content for tab 1</lux-text>
        </lux-tab>
        <lux-tab label="Tab 2">
          <lux-text>Content for tab 2</lux-text>
        </lux-tab>
      </lux-tabs>
    </lux-scope>
  `,
  styles: [`
    :host {
      display: block;
      padding: 2rem;
    }
  `],
})
export class AppComponent {
  title = 'lux-angular-example';
}
