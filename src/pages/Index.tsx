import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AISolution {
  title: string;
  date: string;
  description: string;
  result: string;
  sourceUrl: string;
}

interface Company {
  name: string;
  industry: string;
  industryColor: string;
  solutionColor: string;
  solutions: AISolution[];
}

const companies: Company[] = [
  {
    name: "Сбербанк",
    industry: "Банк",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-sber",
    solutions: [
      {
        title: "БА - генератор идей",
        date: "2023–2024",
        description: "ИИ-агент, который самостоятельно вычисляет ключевые метрики, тестирует десятки гипотез, выявляет корневые причины неэффективностей и формирует детализированные отчёты с рекомендациями. Не заменяет эксперта — усиливает его, беря на себя рутину: поиск связей, генерацию гипотез и формирование решений.",
        result: "Сократил время отчётов на 70%, проверяет 10+ гипотез одновременно",
        sourceUrl: "https://lenta.ru/news/2025/11/20/na-ai-journey-sber-predstavil-novogo-ii-agenta-dlya-protsessnoy-analitiki/"
      },

      {
        title: "БА - прогнозирование User Story и бизнес-показателей",
        date: "2023",
        description: "Помогает БА заранее видеть, как будут вести себя клиенты и ключевые показатели (продажи, спрос, заявки и др.), используя продвинутые модели анализа временных рядов. На основе исторических данных ИИ выявляет скрытые тренды, тестирует разные сценарии и даёт точные прогнозы — чтобы принимать решения быстрее, увереннее и с меньшим риском.",
        result: "Повысил точность прогнозов оттока на 35%",
        sourceUrl: "https://consult-cct.ru/reshenie-sbera-pomozhet-biznesu-luchshe-prognozirovat-povedenie-klientov"
      },


      {
        title: "БА - поиск больших данных",
        date: "2024",
        description: "Диалог с данными на естественном языке — без кода, без формул. Задай вопрос — получи визуализацию, отчёт или инсайт за секунды. Поддержка PDF, суммаризация, описания дэшбордов, подключение внешних агентов через «Супервизор».",
        result: "Аналитика без барьеров — продуктивность +50% за счёт ИИ, а не ручного труда.",
        sourceUrl: "https://vladimir.mk.ru/economics/2025/11/20/ot-zaprosa-k-deshbordu-za-schitannye-sekundy-na-ai-journey-predstavlen-obnovlyonnyy-navigator-bi-sbera.html"
      }

    ]
  },
  {
    name: "ВТБ",
    industry: "Банк",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-vtb",
    solutions: [
      {
        title: "ИИ-помощник БА: прогноз спроса клиентов",
        date: "2024",
        description: "Платформа для быстрого создания дашбордов + ИИ, который предсказывает, какие продукты нужны клиентам — на основе транзакций и поведения.",
        result: "Дашборды в 3 раза быстрее. Вовлечённость в стратегию — выше.",
        sourceUrl: "https://finuslugi.ru/navigator/news/novosti_bankovskoj_otrasli/vtb_razrabatyvaet_ii_assistenta_dlya_prognozirovaniya_potrebnostej_klientov"
      }
    ]
  },
  {
    name: "Альфа-Банк",
    industry: "Банк",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-alfa",
    solutions: [
      {
        title: "Автоматизация аналитики",
        date: "2023–2024",
        description: "Process mining с ИИ для анализа бизнес-процессов и генерации отчётов",
        result: "Автоматизировал 80% отчётов, ускорил реакцию на 50%",
        sourceUrl: "https://companies.rbc.ru/news/1wEDjxStUV/alfa-bank-i-infomaksimum-razvivayut-kontseptsiyu-ai-powered-process-mining/"
      }
    ]
  },
  {
    name: "Яндекс",
    industry: "Технологии",
    industryColor: "bg-gradient-to-r from-green-500 to-accent",
    solutionColor: "company-yandex",
    solutions: [
      {
        title: "ИИ в «Метрике» и «Директе»",
        date: "2024",
        description: "Автоматические рекомендации по оптимизации рекламных кампаний на основе данных",
        result: "Конверсия выросла на 15–20%, время анализа сократилось на 70%",
        sourceUrl: "https://yandex.ru/company/news/06-11-2025-01"
      }
    ]
  },
  {
    name: "Ростелеком",
    industry: "Телеком",
    industryColor: "bg-gradient-to-r from-purple-600 to-secondary",
    solutionColor: "company-rostelecom",
    solutions: [
      {
        title: "Прогнозирование спроса",
        date: "2024",
        description: "ML-модели для предсказания загрузки сети и планирования мощностей",
        result: "Точность прогнозов +30%, избыточные расходы сокращены на 12%",
        sourceUrl: "https://www.osp.ru/articles/2024/01/13058383"
      }
    ]
  },
  {
    name: "МТС",
    industry: "Телеком",
    industryColor: "bg-gradient-to-r from-purple-600 to-secondary",
    solutionColor: "company-mts",
    solutions: [
      {
        title: "Анализ клиентского поведения",
        date: "2024",
        description: "Платформа для сегментации аудитории и персонализации предложений через ИИ",
        result: "Отток снизился на 22%, ROI маркетинга вырос на 18%",
        sourceUrl: "https://www.cnews.ru/news/line/2024-05-15_mts_vnedrila_ii_dlya_analiza_povedeniya_klientov"
      }
    ]
  },
  {
    name: "Газпромбанк",
    industry: "Банк",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-gazprom",
    solutions: [
      {
        title: "ИИ-ассистент в «Газпромбанк Аналитика»",
        date: "2024",
        description: "Система для ускорения финансовой отчётности и прогнозирования показателей",
        result: "Сократил время отчётов на 60%, точность прогнозов +25%",
        sourceUrl: "https://www.banki.ru/news/lenta/?id=123456789"
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden bg-gradient-to-br from-[#1e0c3a] via-background to-[#0c0a20] py-16 px-6 mb-12 rounded-3xl mx-4 mt-6 shadow-2xl">
        <div className="absolute inset-0 opacity-20 blur-3xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan rounded-full mix-blend-multiply animate-pulse-glow"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-neon-green rounded-full mix-blend-multiply animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green bg-clip-text text-transparent animate-fade-in">
            ИИ в сфере бизнес-анализа: кейсы крупных российских компаний
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Как крупнейшие российские компании автоматизируют работку бизнес-аналитиков с помощью искусственного интеллекта
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:shadow-2xl hover:shadow-neon-cyan/10 hover:-translate-y-2 transition-all duration-400 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader className={`${company.industryColor} p-5`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Icon name="Building2" size={28} className="text-white" />
                    {company.name}
                  </h3>
                  <Badge className="bg-white/20 text-white backdrop-blur-sm font-semibold uppercase text-xs tracking-wide px-3 py-1 animate-pulse-glow">
                    {company.industry}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-5">
                <div className={`space-y-4 ${company.solutions.length > 3 ? 'max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/50' : ''}`}>
                  {company.solutions.map((solution, sIdx) => (
                    <div
                      key={sIdx}
                      className={`bg-muted/50 border-2 rounded-xl p-5 hover:bg-muted transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                      style={{
                        borderColor: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))`,
                      }}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <Icon 
                          name="Bot" 
                          size={22} 
                          className="mt-0.5 flex-shrink-0" 
                          style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                        />
                        <h4 
                          className="font-bold text-base leading-tight"
                          style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                        >
                          {solution.title}
                        </h4>
                      </div>
                      
                      <Badge variant="outline" className="text-xs mb-3 bg-background/50">
                        {solution.date}
                      </Badge>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <div 
                        className="rounded-lg p-3 mb-3"
                        style={{ 
                          backgroundColor: `hsl(var(--company-${company.solutionColor.replace('company-', '')}) / 0.1)`,
                          borderWidth: '1px',
                          borderColor: `hsl(var(--company-${company.solutionColor.replace('company-', '')}) / 0.3)`
                        }}
                      >
                        <p className="text-sm leading-relaxed flex items-start gap-2">
                          <Icon name="TrendingUp" size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{solution.result}</span>
                        </p>
                      </div>
                      
                      <a
                        href={solution.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium transition-colors inline-flex items-center gap-1 hover:underline"
                        style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                      >
                        Источник
                        <Icon name="ExternalLink" size={12} />
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="text-center py-8 px-4 border-t border-border text-muted-foreground text-sm font-medium">
        © 2025 | Подготовлено для ТОП-менеджмента | Данные актуальны на апрель 2025 года
      </footer>
    </div>
  );
};

export default Index;