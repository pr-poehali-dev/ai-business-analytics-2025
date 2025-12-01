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
  imageDescription?: string;
}

interface Company {
  name: string;
  industry: string;
  industryColor: string;
  solutionColor: string;
  solutions: AISolution[];
}

const companiesDirectBA: Company[] = [
  {
    name: "Atlassian",
    industry: "Разработка ПО для работы и управления проектами",
    industryColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
    solutionColor: "company-atlassian",
    solutions: [
      {
        title: "ИИ-помощник написания требований для Jira",
        description: "ИИ-помощник написания требований для Jira - это инструмент, разработанный компанией Atlassian, который внедряет искусственный интеллект в рабочий процесс создания требований к задачам в системе управления проектами Jira.",
        features: [
          { text: "Генерация User Story на основе описания задачи / краткого описания от Бизнес-аналитика" },
          { text: "Улучшение функционального описания задачи" },
          { text: "Формирование Драфта функциональных требований в виде текста" },
          { text: "Проверка качества требований: выявление пробелов, неясностей и противоречий" },
          { text: "Работает непосредственно внутри Jira" }
        ],
        result: "Оптимизирует стандартные задачи бизнес-аналитиков, такие как  описание задач, формулировка и структурирование бизнес-требований, разработка user stories и синтез итоговых рекомендаций по БТ. Тем не менее, требует дополнительного контроля и тщательной проверки результатов, фактически выполняя роль пространств DeepSeeka, уже интегрированным в Совкомбанке.",
        sourceUrl: "https://marketplace.atlassian.com/apps/1234191/ai-requirements-copilot-for-jira"
      }
    ]
  }
];

const companiesGeneralOptimization: Company[] = [
  {
    name: "Сбербанк",
    industry: "Банковская сфера",
    industryColor: "bg-gradient-to-r from-green-600 to-emerald-700",
    solutionColor: "company-sber",
    solutions: [
      {
        title: "ИИ-агент для платформы Process Mining",
        description: "Пользователь загружает набор данных и формулирует задачу, а платформа проводит аналитику и предоставляет детализированный отчет с выявленными проблемами, возможными причинами и рекомендациями их решения.",
        imageUrl: "https://cdn.poehali.dev/files/a609e06c-3aa3-4638-b877-fd678bb3158f.png",
        imageDescription: "Пользователь загружает набор данных и формулирует задачу, а платформа проводит аналитику и предоставляет детализированный отчет с выявленными проблемами, возможными причинами и рекомендациями их решения. (полезно для предприятий, связанных например, с поставками товаров).",
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
        imageUrl: "https://cdn.poehali.dev/files/f89fb840-3a46-406c-ae3e-be8944f946a8.png",
        imageDescription: "Платформа аналитики и визуализации больших данных",
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
        imageUrl: "https://cdn.poehali.dev/files/8ca09b17-ad2e-4436-a7d6-68f112b70869.png",
        imageDescription: "Программный продукт представляет собой платформу для управления программными алгоритмами (роботами) на виртуальных рабочих станциях. Роботы умеют извлекать набор данных, необходимых для дальнейшей работы специалиста. Встроенная нейросетевая модель GigaChat позволяет быстро создавать и настраивать сценарии автоматизации.",
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
        title: "Process Mining — технология анализа бизнес-процессов с применением ИИ",
        description: "Предназначена для выявления неэффективностей и точек оптимизации текущих операций компании.",
        features: [
          { text: "Сбор и анализ данных о каждом этапе производственного процесса из различных информационных систем клиента" },
          { text: "Восстановление полной картины бизнес-процесса с помощью интеллектуальной обработки данных" },
          { text: "Определение слабых звеньев («узких мест») и потенциальных зон улучшения" },
          { text: "Проведение экспериментов и проверку гипотез для повышения операционной эффективности" },
          { text: "Формирование заключительного отчета с экономически обоснованными рекомендациями по оптимизации" }
        ],
        result: "Сокращение времени выполнения процессов на 40%, снижение издержек на 25%, увеличение качества выполнения процессов на 35%. Технология направлена на улучшение производственных процессов в целом, а не непосредственно на оптимизацию работы бизнес-аналитиков.",
        sourceUrl: "https://www.ramax.ru/projects/bank-vtb-24-povysil-effektivnost-biznes-protsessov-svoey-roznichnoy-seti-s-pomoshchyu-tekhnologii-pr/"
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
        <Card className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-300 dark:border-amber-700 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">Итоги анализа:</h2>
                <div className="text-sm text-amber-900/90 dark:text-amber-100/90 space-y-3 leading-relaxed">
                  <p>
                    Количество реальных примеров внедрения ИИ-решений, предназначенных для оптимизации работы бизнес-аналитиков, остается ограниченным. Несмотря на активное продвижение крупными компаниями новейших технологий, подтвержденным примером является лишь один инструмент — AI Requirements Copilot for Jira от Atlassian. Он позволяет автоматизировать важные этапы работы бизнес-аналитика, такие как:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Формирование требований.</li>
                    <li>Составление функциональных и нефункциональных спецификаций.</li>
                    <li>Подготовку критериев приемки задач.</li>
                  </ul>
                  <p className="font-semibold">Общая картина:</p>
                  <p>
                    Большинство инициатив в области ИИ сосредоточены на повышении производительности и расширении возможностей искусственного интеллекта, что полезно для бизнеса в целом, но не решает уникальных задач бизнес-аналитиков. Современные решения направлены на:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Повышение вычислительной мощности ИИ.</li>
                    <li>Увеличение способности обрабатывать большие объемы данных.</li>
                    <li>Оптимизацию работы сотрудников КЦ, Оперу, Андеррайтинга.</li>
                  </ul>
                  <p>
                    Таким образом, большинство новинок влияют на общую картину, но не создают специализированных инструментов для оптимизации труда бизнес-аналитиков.
                  </p>
                  <p className="font-semibold">Далее:</p>
                  <p>
                    Приведены конкретные примеры решений, влияющих на работу бизнес-аналитиков, а также общие инициативы, направленные на совершенствование искусственного интеллекта.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Прямое влияние на работу бизнес-аналитиков
            </h2>
            <p className="text-muted-foreground">
              Решения, непосредственно оптимизирующие выполнение обязанностей бизнес-аналитиков
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {companiesDirectBA.map((company, idx) => (
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
                            Итог анализа:
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

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-300 dark:border-blue-700 shadow-lg sticky top-4 self-start">
              <CardContent className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Lightbulb" size={22} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-1">Примеры использования ИИ-функционала от Atlassian</h3>
                    <p className="text-xs text-blue-900/80 dark:text-blue-100/80">
                      Как AI Requirements Copilot помогает бизнес-аналитикам
                    </p>
                  </div>
                </div>

                <div className="h-[600px] overflow-y-auto pr-2 space-y-5 scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-700 scrollbar-track-transparent">
                  <div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow-sm">
                      <img 
                        src="https://cdn.poehali.dev/files/26ea7eb6-70d4-4d01-96b1-67f718f61ac3.png" 
                        alt="Интерфейс AI Requirements Copilot в Jira с разделами для настройки пространств"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-900/70 dark:text-blue-100/70 mt-2 italic">
                      В task есть отдельный раздел с кнопками (аналогами пространств DeepSeek). Их можно настраивать и добавлять новые
                    </p>
                  </div>

                  <div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow-sm">
                      <img 
                        src="https://cdn.poehali.dev/files/730ed91d-72b0-4db0-9591-1d40e46b5dcf.png" 
                        alt="Генерация User Story с помощью AI"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-900/70 dark:text-blue-100/70 mt-2 italic">
                      1 кнопка "User Story" - ИИ анализирует описание задачи и выдает драфт пути клиента. Пользователь может задать более подробную инструкцию, либо попросить скорректировать путь клиента. После сохранения сгенерированного ответа ИИ → в задачу автоматически зафиксируется инфо по пути клиента
                    </p>
                  </div>

                  <div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow-sm">
                      <img 
                        src="https://cdn.poehali.dev/files/1ca2ccd4-61e6-4be5-8a06-86d25c641449.png" 
                        alt="Генерация функциональных требований с помощью AI"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-900/70 dark:text-blue-100/70 mt-2 italic">
                      2 кнопка "Функциональные требования" - ИИ анализирует контекст задачи и выдает драфт требований. Пользователь может задать более подробную инструкцию, либо попросить скорректировать требования. После сохранения сгенерированного ответа ИИ → в задачу автоматически зафиксируется инфо по БТ
                    </p>
                  </div>

                  <div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow-sm">
                      <img 
                        src="https://cdn.poehali.dev/files/1d197271-555d-4038-8c99-63e83cc19193.png" 
                        alt="Генерация тест-кейсов с помощью AI"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-900/70 dark:text-blue-100/70 mt-2 italic">
                      3 кнопка "Test Case" - ИИ анализирует контекст задачи и выдает кейсы для проведения тестирования. Пользователь может задать более подробную инструкцию, либо попросить скорректировать кейсы. После сохранения сгенерированного ответа ИИ → в задачу автоматически зафиксируется инфо по тест-кейсам
                    </p>
                  </div>

                  <div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow-sm">
                      <img 
                        src="https://cdn.poehali.dev/files/a4b70e50-1b67-4b50-8205-83688042fd47.png" 
                        alt="Генерация Review с помощью AI"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-900/70 dark:text-blue-100/70 mt-2 italic">
                      4 кнопка "Review" - ИИ анализирует контекст задачи и требования → выдает предложения по улучшению БТ. Пользователь может задать более подробную инструкцию, либо попросить дополнить улучшения. После сохранения сгенерированного ответа ИИ → в задачу автоматически зафиксируется ревью по БТ
                    </p>
                  </div>

                  <div>
                    <div className="rounded-lg overflow-hidden border-2 border-blue-300 dark:border-blue-700 shadow-sm">
                      <img 
                        src="https://cdn.poehali.dev/files/780d4820-3fa9-43a0-b12e-970eee7a450e.png" 
                        alt="Генерация критериев приемки с помощью AI"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-xs text-blue-900/70 dark:text-blue-100/70 mt-2 italic">
                      5 кнопка "Критерии приемки" - ИИ анализирует контекст задачи и выдает перечень критериев приемки. Пользователь может задать более подробную инструкцию, либо попросить дополнить критерии. После сохранения сгенерированного ответа ИИ → в задачу автоматически зафиксируется инфо критериям приемки
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              Общая оптимизация бизнес-процессов
            </h2>
            <p className="text-muted-foreground">
              Решения для целостной оптимизации бизнес-процессов, не затрагивающие напрямую работу бизнес-аналитиков
            </p>
          </div>
          
          <div className="space-y-12">
            {companiesGeneralOptimization.map((company, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card
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
                          Итог анализа:
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

            {company.name === "Сбербанк" && company.solutions.some(s => s.imageUrl) && (
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-300 dark:border-green-700 shadow-lg sticky top-4 self-start">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon name="ImageIcon" size={22} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-1">Примеры интерфейсов решений</h3>
                      <p className="text-xs text-green-900/80 dark:text-green-100/80">
                        Визуальная демонстрация платформ Сбербанка
                      </p>
                    </div>
                  </div>

                  <div className="h-[600px] overflow-y-auto pr-2 space-y-5 scrollbar-thin scrollbar-thumb-green-300 dark:scrollbar-thumb-green-700 scrollbar-track-transparent">
                    {company.solutions.filter(s => s.imageUrl).map((solution, sIdx) => (
                      <div key={sIdx}>
                        <div className="rounded-lg overflow-hidden border-2 border-green-300 dark:border-green-700 shadow-sm">
                          <img 
                            src={solution.imageUrl} 
                            alt={solution.title}
                            className="w-full h-auto"
                          />
                        </div>
                        {solution.imageDescription && (
                          <p className="text-xs text-green-900/70 dark:text-green-100/70 mt-2 italic">
                            {solution.imageDescription}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
              </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;