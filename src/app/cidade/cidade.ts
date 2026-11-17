import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface InfoCidade {
  titulo: string;
  pais: string;
  imagem: string;
  descricao: string;
}

@Component({
  selector: 'app-cidade',
  standalone: false,
  templateUrl: './cidade.html',
  styleUrl: './cidade.css'
})
export class Cidade implements OnInit {
  cidadeAtual?: InfoCidade;

  private dadosCidades: Record<string, InfoCidade> = {
    rio: {
      titulo: 'Rio de Janeiro',
      pais: 'Brasil',
      imagem: '/assets/rio.png',
      descricao: 'Conhecida como a Cidade Maravilhosa, famosa pelo Cristo Redentor, Pão de Açúcar e pelas praias de Copacabana e Ipanema.'
    },
    ny: {
      titulo: 'New York',
      pais: 'Estados Unidos',
      imagem: '/assets/ny.png',
      descricao: 'Uma das maiores metrópoles do mundo, lar da Estátua da Liberdade, Times Square, Central Park e Broadway.'
    },
    paris: {
      titulo: 'Paris',
      pais: 'França',
      imagem: '/assets/paris.png',
      descricao: 'A Cidade Luz, mundialmente célebre pela Torre Eiffel, Museu do Louvre, Catedral de Notre-Dame e sua gastronomia.'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('nome') || '';
      this.cidadeAtual = this.dadosCidades[slug];
    });
  }
}