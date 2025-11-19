# Portfólio Estático - Guia de Uso e Edição

Bem-vindo ao seu portfólio estático clonado! Este é um template pronto para personalização com seus dados, projetos e informações profissionais.

## 📋 Estrutura do Projeto

```
meu-portfolio-clone/
├── index.html                 # Página principal do portfólio
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos CSS do portfólio
│   ├── js/
│   │   └── main.js           # Scripts JavaScript
│   ├── images/               # Pasta para suas imagens
│   └── fonts/                # Pasta para fontes customizadas
├── README.md                 # Este arquivo
└── notes.txt                 # Notas sobre a clonagem
```

## 🚀 Como Usar Localmente

### Opção 1: Abrir Diretamente no Navegador
1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O portfólio abrirá no seu navegador padrão

### Opção 2: Usar um Servidor Local (Recomendado)

**Com Python 3:**
```bash
cd meu-portfolio-clone
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

**Com Node.js (http-server):**
```bash
npm install -g http-server
cd meu-portfolio-clone
http-server
```

**Com PHP:**
```bash
cd meu-portfolio-clone
php -S localhost:8000
```

## ✏️ Como Editar o Portfólio

### 1. Editar Informações Pessoais (HTML)

Abra o arquivo `index.html` com um editor de texto (VS Code, Sublime, Notepad++, etc.) e procure pelas seções:

**Seção Hero (Apresentação):**
```html
<h1 class="hero-title">Seu Nome :)</h1>
<p class="hero-subtitle">Um Engenheiro de Software ajudando pessoas na internet.</p>
```

**Seção Sobre:**
```html
<p>Tenho <strong>X anos de experiência</strong> como Engenheiro de Software...</p>
```

**Seção Experiência:**
Substitua os nomes das empresas e adicione suas experiências profissionais:
```html
<div class="company-item">Sua Empresa</div>
```

**Seção Projetos:**
Edite os cards de projeto com seus projetos reais:
```html
<div class="project-card">
    <h3>Seu Projeto</h3>
    <p>Descrição do seu projeto.</p>
    <a href="link-do-projeto" class="project-link">Ver mais →</a>
</div>
```

**Seção Habilidades:**
Atualize as tags de habilidades:
```html
<div class="skill-tag">Sua Habilidade</div>
```

### 2. Editar Estilos (CSS)

O arquivo `assets/css/styles.css` contém todos os estilos. Você pode:

**Alterar Cores:**
```css
:root {
    --primary-color: #10b981;        /* Cor principal */
    --secondary-color: #1f2937;      /* Cor secundária */
    --text-dark: #111827;            /* Cor do texto */
    --bg-light: #f9fafb;             /* Cor de fundo claro */
}
```

**Alterar Fontes:**
```css
body {
    font-family: 'Sua Fonte', sans-serif;
}
```

**Ajustar Tamanhos:**
```css
.hero-title {
    font-size: 64px;  /* Altere para o tamanho desejado */
}
```

### 3. Adicionar Imagens

1. Coloque suas imagens na pasta `assets/images/`
2. Referencie no HTML:
```html
<img src="assets/images/sua-imagem.jpg" alt="Descrição">
```

### 4. Adicionar Fontes Customizadas

1. Coloque os arquivos de fonte em `assets/fonts/`
2. Importe no CSS:
```css
@font-face {
    font-family: 'MinhaFonte';
    src: url('../fonts/minha-fonte.woff2') format('woff2');
}

body {
    font-family: 'MinhaFonte', sans-serif;
}
```

## 🔗 Links e Contato

### Atualizar Links de Redes Sociais

No arquivo `index.html`, procure pela seção de navegação social e atualize os links:

```html
<a href="https://youtube.com/seu-canal" target="_blank">
<a href="https://instagram.com/seu-usuario" target="_blank">
<a href="https://linkedin.com/in/seu-perfil" target="_blank">
```

### Atualizar Email de Contato

Procure por `seu.email@exemplo.com` e substitua pelo seu email real:

```html
<a href="mailto:seu.email@exemplo.com" class="cta-button">Me envie um e-mail!</a>
```

## 📝 Funcionalidades Implementadas

- ✅ **Design Responsivo**: Funciona em desktop, tablet e mobile
- ✅ **Animações Suaves**: Transições e efeitos visuais
- ✅ **Scroll Reveal**: Elementos aparecem ao fazer scroll
- ✅ **Dark Mode Ready**: Estrutura preparada para modo escuro
- ✅ **SEO Básico**: Meta tags e estrutura semântica
- ✅ **Acessibilidade**: Estrutura HTML semântica

## ⚠️ Notas Importantes

### Formulários de Contato

O botão de contato atualmente usa `mailto:`, o que abre o cliente de email padrão. Se desejar um formulário funcional com backend, você pode:

1. **Usar Formspree** (Gratuito):
   - Acesse [formspree.io](https://formspree.io)
   - Crie um formulário e obtenha o endpoint
   - Substitua o `href` do botão

2. **Usar EmailJS** (JavaScript puro):
   - Acesse [emailjs.com](https://emailjs.com)
   - Configure e adicione o script ao seu portfólio

3. **Usar um Backend Próprio**:
   - Configure um servidor Node.js/Python
   - Aponte o formulário para seu servidor

### Analytics e Rastreamento

Este portfólio **não inclui** Google Analytics ou outros rastreadores por padrão. Se desejar adicionar:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Licenças de Fontes e Imagens

- As fontes do sistema usadas são de código aberto
- Certifique-se de ter direitos sobre as imagens que usar
- Se usar imagens de terceiros, cite a fonte apropriadamente

## 🎨 Dicas de Personalização

### Adicionar Seções Novas

1. Copie uma seção existente
2. Altere o ID e o conteúdo
3. Adicione estilos CSS se necessário

### Exemplo de Nova Seção:
```html
<section class="certifications">
    <h2>Certificações:</h2>
    <div class="cert-list">
        <!-- Adicione suas certificações aqui -->
    </div>
</section>
```

### Melhorar Performance

- Comprima imagens antes de adicionar
- Use formatos modernos (WebP)
- Minimize CSS/JS em produção

## 📱 Responsividade

O portfólio é totalmente responsivo. Os breakpoints são:

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: Até 767px

## 🐛 Troubleshooting

**Problema**: As imagens não aparecem
- **Solução**: Verifique se o caminho está correto (ex: `assets/images/imagem.jpg`)

**Problema**: Estilos não carregam
- **Solução**: Certifique-se de que o arquivo CSS está em `assets/css/styles.css`

**Problema**: Links não funcionam
- **Solução**: Use caminhos relativos (ex: `./assets/imagens/`)

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/) - Documentação HTML/CSS/JS
- [CSS Tricks](https://css-tricks.com/) - Tutoriais CSS avançados
- [Unsplash](https://unsplash.com/) - Imagens gratuitas de alta qualidade
- [Google Fonts](https://fonts.google.com/) - Fontes gratuitas

## 🚀 Próximos Passos

1. Personalize com suas informações
2. Adicione suas imagens e projetos
3. Teste em diferentes dispositivos
4. Compartilhe seu portfólio!

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:

1. Verifique a documentação acima
2. Procure por tutoriais online
3. Consulte a comunidade de desenvolvimento

---

**Criado em**: 2025  
**Versão**: 1.0  
**Licença**: MIT (Sinta-se livre para usar e modificar)

Boa sorte com seu portfólio! 🎉
