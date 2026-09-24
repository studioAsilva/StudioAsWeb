import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@core/layout/footer/footer';
import { Header } from '@core/layout/header/header';
import { WhatsappButton } from '@core/layout/whatsapp-button/whatsapp-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, WhatsappButton],
  template: `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <app-header />
    <main id="conteudo">
      <router-outlet />
    </main>
    <app-footer />
    <app-whatsapp-button />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
