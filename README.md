# GTM DataLayer Elite: Standardization Utility

<div align="center">
  <p>Standardized Data Layer event patterns and JavaScript utilities for high-performance marketing analytics.</p>
  <p>
    <a href="#-english">🇺🇸 English</a> | 
    <a href="#-português">🇧🇷 Português</a>
  </p>
</div>

***

## 🇺🇸 English

### Overview
This repository contains the official TAVARDT standard for Data Layer implementations. Reliable tracking is the foundation of high-ticket digital marketing. Our utility script ensures that events are pushed safely, asynchronously, and with consistent metadata across all client platforms.

### Key Features
* Asynchronous Safety: Prevents errors if the Data Layer is not yet initialized.
* Standardized Schema: Unified event names for Leads, Errors, and Product views.
* Performance Focused: Extremely lightweight script with zero impact on PageSpeed.
* B2B Ready: Specific tracking methods for complex conversion funnels.

### Installation
```bash
npm install @tavardt/gtm-datalayer
```

### Usage
Include the datalayer.js script or import the package:
```javascript
import TavardtPulse from '@tavardt/gtm-datalayer';
TavardtPulse.trackLead('contact_form_01', 'demo_request');
```

### Contact & Services
Looking for elite B2B infrastructure and high-ticket digital engineering?
* Website: [ag.tavardt.com](https://ag.tavardt.com/)
* Email: contact@tavardt.com

***

## 🇧🇷 Português

### Visão Geral
Este repositório contém o padrão oficial da TAVARDT para implementações de Data Layer. O rastreamento confiável é a base do marketing digital high-ticket. Nosso script utilitário garante que os eventos sejam disparados de forma segura, assíncrona e com metadados consistentes em todas as plataformas de clientes.

### Recursos Principais
* Segurança Assíncrona: Previne erros caso o Data Layer ainda não tenha sido inicializado.
* Esquema Padronizado: Nomes de eventos unificados para Leads, Erros e Visualizações de Produtos.
* Foco em Performance: Script extremamente leve com impacto zero no PageSpeed.
* B2B Ready: Métodos de rastreamento específicos para funis de conversão complexos.

### Instalação
```bash
npm install @tavardt/gtm-datalayer
```

### Uso
Inclua o script datalayer.js ou importe o pacote:
```javascript
import TavardtPulse from '@tavardt/gtm-datalayer';
TavardtPulse.trackLead('formulario_contato_01', 'solicitacao_demo');
```

### Contato & Serviços
Procurando por infraestrutura B2B de elite e engenharia digital high-ticket?
* Site: [ag.tavardt.com/br/](https://ag.tavardt.com/br/)
* E-mail: contato@tavardt.com
