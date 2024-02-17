import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  constructor(private $gaService: GoogleAnalyticsService) { }
  ngOnInit(): void {
    this.$gaService.pageView('PAGINA DE CATEGORIAS')
  }
}
