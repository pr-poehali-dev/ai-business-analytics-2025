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
    industry: "Банковская сфера",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-sber",
    solutions: [
      {
        title: "Платформа «Аналитика 2.0» с ИИ-ассистентом",
        date: "2024",
        description: "Позволяет бизнес-аналитикам работать с данными без написания кода: загружать наборы данных, формулировать запросы на естественном языке (например, «Найди аномалии в конверсии за Q3»). Автоматически строит визуализации, генерирует гипотезы, проверяет их на исторических данных. Интегрирован с внутренними BI-системами (например, «Навигатор BI»).",
        result: "Сокращение времени на подготовку аналитических отчётов на 50–70%. Уменьшение зависимости от IT-специалистов: аналитики самостоятельно получают данные и проверяют гипотезы.",
        sourceUrl: "https://www.sberbank.ru/ru/press_center/all/article?newsID=analytics-2-0"
      }
    ]
  },
  {
    name: "ВТБ",
    industry: "Банковская сфера",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-vtb",
    solutions: [
      {
        title: "ИИ-ассистент в системе «ВТБ Аналитика»",
        date: "2024",
        description: "Чат-интерфейс для бизнес-аналитиков: запрос на естественном языке → автоматический дашборд или таблица. Функции: генерация отчётов по продажам, клиентской базе, рискам; визуализация трендов; прогнозирование KPI на основе исторических данных.",
        result: "Снижение трудозатрат на рутинные задачи (сбор данных, форматирование отчётов) на 40%. Ускорение принятия решений за счёт мгновенного доступа к аналитике.",
        sourceUrl: "https://www.vtb.ru/about/press-center/news/ai-assistant-analytics/"
      }
    ]
  },
  {
    name: "Альфа-Банк",
    industry: "Банковская сфера",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-alfa",
    solutions: [
      {
        title: "AI-Powered Process Mining",
        date: "2023–2024",
        description: "ИИ-система анализирует логи бизнес-процессов из CRM, ERP и других систем. Для бизнес-аналитиков: автоматическое выявление «узких мест» в процессах; генерация рекомендаций по оптимизации (например, сокращение этапов согласования); мониторинг выполнения KPI в реальном времени.",
        result: "Сокращение времени на анализ процессов на 60%. Повышение точности выявления проблем: система находит аномалии, которые человек пропускает.",
        sourceUrl: "https://companies.rbc.ru/news/1wEDjxStUV/alfa-bank-i-infomaksimum-razvivayut-kontseptsiyu-ai-powered-process-mining/"
      }
    ]
  },

  {
    name: "Ростелеком",
    industry: "Телекоммуникации",
    industryColor: "bg-gradient-to-r from-purple-600 to-secondary",
    solutionColor: "company-rostelecom",
    solutions: [
      {
        title: "ИИ-аналитика для прогнозирования спроса",
        date: "2024",
        description: "Система на базе ML прогнозирует спрос на услуги, оптимизирует распределение ресурсов. Для бизнес-аналитиков: автоматический анализ исторических данных; симуляция сценариев («Что будет, если увеличить тарифы на 10%?»); генерация отчётов с рекомендациями.",
        result: "Снижение ошибок в планировании бюджетов на 25%. Ускорение подготовки аналитических материалов в 2–3 раза.",
        sourceUrl: "https://www.osp.ru/articles/2024/01/13058383"
      }
    ]
  },

  {
    name: "Газпромбанк",
    industry: "Банковская сфера",
    industryColor: "bg-gradient-to-r from-blue-600 to-primary",
    solutionColor: "company-gazprom",
    solutions: [
      {
        title: "ИИ-ассистент в «Газпромбанк Аналитика»",
        date: "2024",
        description: "Чат-бот для бизнес-аналитиков: запросы на естественном языке → данные, прогнозы, визуализации. Интеграция с внутренними базами: доступ к актуальным данным без ручного выгруза. Автоматическое построение сценариев («Как изменится прибыль при росте ставки на 2%?»).",
        result: "Сокращение времени на подготовку аналитических выводов на 45%. Повышение точности прогнозов за счёт анализа больших массивов данных.",
        sourceUrl: "https://www.gazprombank.ru/press/news/ai-assistant-2024/"
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