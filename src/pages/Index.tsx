import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Feature {
  text: string;
}

interface AISolution {
  title: string;
  description: string;
  features: Feature[];
  result: string;
  sourceUrl: string;
  imageUrl?: string;
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
    name: "Atlassian",
    industry: "Разработка ПО",
    industryColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
    solutionColor: "company-atlassian",
    solutions: [
      {
        title: "AI Requirements Copilot",
        description: "ИИ-ассистент написания БТ с интуитивно понятным интерфейсом",
        features: [
          { text: "Помогает писать БТ, User Stories, Use Cases" },
          { text: "Проверяет требования на полноту и соответствие стандартам" },
          { text: "Интегрирован с Jira, Confluence, 1С, SAP" }
        ],
        result: "Ускорение написания технических требований в 3-4 раза. Снижение количества ошибок и несоответствий стандартам на 60%.",
        sourceUrl: "https://marketplace.atlassian.com/apps/1234191/ai-requirements-copilot-for-jira"
      }
    ]
  },
  {
    name: "Сбербанк",
    industry: "Банковская сфера",
    industryColor: "bg-gradient-to-r from-green-600 to-emerald-700",
    solutionColor: "company-sber",
    solutions: [
      {
        title: "ИИ-агент для платформы Process Mining",
        description: "Пользователь загружает набор данных и формулирует задачу, а платформа проводит аналитику и предоставляет детализированный отчет с выявленными проблемами, возможными причинами и рекомендациями их решения.",
        features: [
          { text: "Сбор данных о каждом этапе процесса из информационных систем компании" },
          { text: "Воссоздание реальной модели всего бизнес-процесса с помощью технологии искусственного интеллекта" },
          { text: "Выявление «узких мест» и поиск зон оптимизации" },
          { text: "Проверка гипотез для повышения эффективности процесса" },
          { text: "Предоставление отчета с рекомендациями по оптимизации процесса с просчитываемым экономическим эффектом" }
        ],
        result: "Сокращение времени на анализ бизнес-процессов на 65%. Повышение точности выявления узких мест на 70%. Экономический эффект от оптимизации процессов — до 30% снижения операционных затрат.",
        sourceUrl: "https://www.gazeta.ru/business/news/2025/11/20/27226712.shtml"
      },
      {
        title: "Платформа «Аналитика 2.0» с ИИ-ассистентом",
        description: "Позволяет бизнес-аналитикам работать с данными без написания кода",
        features: [
          { text: "Загружать наборы данных" },
          { text: "Формулировать запросы на естественном языке (например, «Найди аномалии в конверсии за Q3»)" },
          { text: "Автоматически строит визуализации" },
          { text: "Генерирует гипотезы, проверяет их на исторических данных" },
          { text: "Интегрирован с внутренними BI-системами (например, «Навигатор BI»)" }
        ],
        result: "Сокращение времени на подготовку аналитических отчётов на 50–70%. Уменьшение зависимости от IT-специалистов: аналитики самостоятельно получают данные и проверяют гипотезы.",
        sourceUrl: "https://navigator.sberanalytics.ru/"
      },
      {
        title: "SaluteRPA — программный продукт для анализа больших данных с ИИ",
        description: "SaluteRPA автоматизирует рутинные задачи аналитиков, такие как конвертация изображений в текст, поиск данных и извлечение информации для дальнейшей работы. Программный продукт представляет собой платформу для управления программными алгоритмами (роботами) на виртуальных рабочих станциях.",
        features: [
          { text: "Роботы умеют извлекать набор данных, необходимых для дальнейшей работы специалиста" },
          { text: "Встроенная нейросетевая модель GigaChat позволяет быстро создавать и настраивать сценарии автоматизации" },
          { text: "Конвертация изображений в текст" },
          { text: "Автоматический поиск и извлечение информации" }
        ],
        result: "Снижение времени на рутинные задачи на 80%. Повышение производительности аналитиков в 2-3 раза. Сокращение ошибок при обработке данных на 90%.",
        sourceUrl: "https://developers.sber.ru/help/gigachat-api/business-analytics"
      }
    ]
  },
  {
    name: "Ramax Group",
    industry: "Поставщик ИИ решений",
    industryColor: "bg-gradient-to-r from-purple-600 to-pink-600",
    solutionColor: "company-ramax",
    solutions: [
      {
        title: "Process Mining — анализ бизнес-процессов",
        description: "Анализирует бизнес-процессы, выявляет аномалии и предлагает оптимизации.",
        features: [
          { text: "Сбор данных о каждом этапе процесса из информационных систем компании" },
          { text: "Воссоздание реальной модели всего бизнес-процесса с помощью технологии искусственного интеллекта" },
          { text: "Выявление «узких мест» и поиск зон оптимизации" },
          { text: "Проверка гипотез для повышения эффективности процесса" },
          { text: "Предоставление отчета с рекомендациями по оптимизации процесса с просчитываемым экономическим эффектом" }
        ],
        result: "Сокращение времени выполнения процессов на 40%. Снижение операционных затрат на 25%. Повышение качества процессов на 35%.",
        sourceUrl: "https://www.ramax.ru/directions/povysheni"
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
            ИИ в сфере бизнес-анализа
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Как ведущие компании автоматизируют работу бизнес-аналитиков с помощью искусственного интеллекта
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  <Badge className="bg-white/20 text-white backdrop-blur-sm font-semibold uppercase text-xs tracking-wide px-3 py-1">
                    {company.industry}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-5">
                <div className="space-y-4">
                  {company.solutions.map((solution, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-muted/50 border-2 rounded-xl p-5 hover:bg-muted transition-all duration-300"
                      style={{
                        borderColor: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))`,
                      }}
                    >
                      {solution.imageUrl && (
                        <div className="mb-4 -mx-5 -mt-5 rounded-t-xl overflow-hidden">
                          <img 
                            src={solution.imageUrl} 
                            alt={solution.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-start gap-2 mb-3">
                        <Icon 
                          name="Bot" 
                          size={22} 
                          className="mt-0.5 flex-shrink-0" 
                          style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                        />
                        <h4 
                          className="font-bold text-lg leading-tight"
                          style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                        >
                          {solution.title}
                        </h4>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {solution.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Что делает:</p>
                        <ul className="space-y-1.5">
                          {solution.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-sm">
                              <Icon 
                                name="CheckCircle2" 
                                size={16} 
                                className="mt-0.5 flex-shrink-0"
                                style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                              />
                              <span className="text-foreground/90">{feature.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-3 p-3 bg-background/50 rounded-lg border border-border">
                        <p className="text-xs font-semibold mb-1 uppercase tracking-wide flex items-center gap-1.5">
                          <Icon name="TrendingUp" size={14} />
                          Результаты внедрения:
                        </p>
                        <p className="text-sm text-foreground/90 leading-relaxed">{solution.result}</p>
                      </div>

                      <a
                        href={solution.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs hover:underline transition-colors"
                        style={{ color: `hsl(var(--company-${company.solutionColor.replace('company-', '')}))` }}
                      >
                        <Icon name="ExternalLink" size={14} />
                        Источник
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;