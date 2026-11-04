const projects = [
  {
    title: 'Atrair talentos',
    meta: 'RECRUITMENT MARKETING · EMPLOYER BRANDING · CONTEÚDO',
    intro: 'Estratégia e conteúdo para acompanhar candidatos desde a descoberta da oportunidade até as etapas finais do processo.',
    body: `DESAFIO — Comunicar programas de formação e oportunidades profissionais a públicos em início de carreira, acompanhando a candidatura da atração ao encerramento.

ATUAÇÃO DO DIME — Planejamento editorial e de comunicação, criação de conteúdo para canais sociais, redação de e-mails e organização da cadência de mensagens. Cada peça foi ajustada à etapa e ao objetivo: apresentar a oportunidade, orientar a candidatura, apoiar o andamento e concluir a jornada.

CONTRIBUIÇÃO — Dime conectou estratégia e execução. Seu trabalho transformou informações sobre programas, requisitos e benefícios em mensagens claras e acionáveis, alinhando canais e etapas para que cada comunicação conduzisse ao próximo passo.

COMPETÊNCIAS — Recruitment Marketing, Employer Branding, planejamento editorial, comunicação estratégica, copywriting, e-mail marketing e CRM, jornada do candidato, comunicação multicanal e gestão de cronogramas.`,
    art: 'art-project-samples',
    caseSummary: { eyebrow: 'ESTRATÉGIA · CONTEÚDO · JORNADA', headline: 'Da primeira mensagem ao próximo passo.', stats: [{ value: '21', label: 'materiais' }, { value: '4', label: 'frentes conectadas' }] },
    caseSections: [
      {
        "title": "Planejamento editorial",
        "count": "6 planos",
        "description": "Calendários e pautas para canais sociais, com temas e formatos distribuídos ao longo dos ciclos dos programas.",
        "skills": [
          "Planejamento editorial",
          "Conteúdo social",
          "Calendário de conteúdo"
        ]
      },
      {
        "title": "Comunicação estratégica",
        "count": "2 planos",
        "description": "Estratégia macro desdobrada em mensagens, canais e cadência para organizar a fase de atração.",
        "skills": [
          "Estratégia de comunicação",
          "Mensagens-chave",
          "Planejamento multicanal"
        ]
      },
      {
        "title": "Atração e lançamento",
        "count": "9 e-mails",
        "description": "Aberturas e convites que apresentam oportunidades, benefícios e requisitos, com chamadas claras para inscrição.",
        "skills": [
          "Copywriting",
          "E-mail marketing",
          "Chamadas para ação"
        ]
      },
      {
        "title": "Conversão e encerramento",
        "count": "4 e-mails",
        "description": "Lembretes, orientação sobre etapas, confirmações e retornos para concluir a jornada de candidatura com clareza.",
        "skills": [
          "CRM",
          "Jornada do candidato",
          "Comunicação de relacionamento"
        ]
      }
    ]
  },
  {
    title: 'Conteúdo com estratégia',
    meta: 'Social Media · Branding · LinkedIn · Pode Rio Estúdio · 2025–2026',
    intro: 'Planejamento de conteúdo para LinkedIn com foco em branding, marketing de conteúdo e fortalecimento da presença digital da marca.',
    body: `ATUAÇÃO — Estratégia de conteúdo, planejamento editorial e calendário de publicações.

ENTREGAS — Produção de copy, revisão de textos e otimização SEO para ampliar alcance orgânico e engajamento.

OUTRA FRENTE — Gestão de projetos audiovisuais e operações, organização de processos, prioridades, equipe multidisciplinar e entregas.`,
    art: 'art-culture',
  },
  {
    title: 'Comunicação que acompanha',
    meta: 'Newsletters · E-mails · Copywriting · Design',
    intro: 'Conteúdo por e-mail para manter a comunicação com assinantes e clientes, promover materiais e ofertas e apoiar diferentes momentos da jornada.',
    body: `NEWSLETTERS — Produção recorrente para a base de assinantes e clientes, com divulgação de conteúdos, ofertas e seções especiais. O acervo reúne quatro exemplos.

COPYWRITING — Assuntos, introduções envolventes, benefícios e chamadas para ação organizados em uma sequência clara. Uso de storytelling e técnicas de copywriting.

E-MAILS — O projeto também reúne dois exemplos classificados como e-mails transacionais e de marketing.

DESIGN — Headers, banners, gráficos, rodapés e composições visuais criados no Canva para acompanhar o conteúdo. Adaptação para e-mail, redes sociais e formatos desktop e mobile.

CONTEXTO — As peças somam copy e design em uma frente de comunicação digital.`,
    art: 'art-wellness',
  },
];

const detail = document.querySelector('#detail');
document.querySelector('#detail .eyebrow').textContent = 'Projeto em destaque · contexto e entregas';

function openProject(index) {
  const project = projects[index];
  document.querySelector('#dTitle').textContent = project.title;
  document.querySelector('#dMeta').textContent = project.meta;
  document.querySelector('#dIntro').textContent = project.intro;
  document.querySelector('#dBody').innerHTML = project.body.replaceAll('\n', '<br>');
  const art = document.querySelector('#dArt');
  art.replaceChildren();
  if (project.caseSummary) {
    art.className = 'detail-art case-summary-art';
    const summary = document.createElement('div');
    summary.className = 'case-summary';
    const eyebrow = document.createElement('p');
    eyebrow.className = 'case-summary-eyebrow';
    eyebrow.textContent = project.caseSummary.eyebrow;
    const headline = document.createElement('h3');
    headline.textContent = project.caseSummary.headline;
    const stats = document.createElement('div');
    stats.className = 'case-summary-stats';
    project.caseSummary.stats.forEach((item) => {
      const stat = document.createElement('div');
      stat.className = 'case-summary-stat';
      const value = document.createElement('strong');
      value.textContent = item.value;
      const label = document.createElement('small');
      label.textContent = item.label;
      stat.append(value, label);
      stats.append(stat);
    });
    summary.append(eyebrow, headline, stats);
    art.append(summary);
  } else {
    art.className = `detail-art art ${project.art}`;
  }
  const gallery = document.querySelector('#projectGallery');
  gallery.replaceChildren();
  gallery.hidden = !project.caseSections;
  if (project.caseSections) {
    gallery.setAttribute('aria-label', 'Atuação, entregas e competências do Case 1');
    const heading = document.createElement('h3');
    heading.textContent = 'O trabalho em quatro frentes';
    const grid = document.createElement('div');
    grid.className = 'case-breakdown-grid';
    project.caseSections.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'case-breakdown-card';
      const count = document.createElement('p');
      count.className = 'case-breakdown-count';
      count.textContent = item.count;
      const title = document.createElement('h4');
      title.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = item.description;
      const skills = document.createElement('small');
      skills.className = 'case-breakdown-skills';
      skills.textContent = item.skills.join(' · ');
      card.append(count, title, description, skills);
      grid.append(card);
    });
    gallery.append(heading, grid);
  }
  detail.classList.add('open');
  detail.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.querySelector('.close').focus();
}

function closeProject() {
  detail.classList.remove('open');
  detail.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => openProject(Number(card.dataset.project)));
  card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openProject(Number(card.dataset.project)); } });
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-3px)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

document.querySelector('.close').addEventListener('click', closeProject);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeProject();
});
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((link) => {
  link.addEventListener('click', () => {
    if (detail.classList.contains('open')) closeProject();
  });
});
document.addEventListener('pointermove', (event) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});
