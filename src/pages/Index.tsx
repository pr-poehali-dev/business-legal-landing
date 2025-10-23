import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: 'Building2',
      title: 'Сопровождение бизнеса',
      description: 'Комплексная правовая поддержка на всех этапах развития компании'
    },
    {
      icon: 'Scale',
      title: 'Корпоративные конфликты',
      description: 'Разрешение споров между участниками и защита интересов бизнеса'
    },
    {
      icon: 'FileText',
      title: 'Банкротство юридических лиц',
      description: 'Профессиональное сопровождение процедур банкротства'
    },
    {
      icon: 'LineChart',
      title: 'Консалтинг',
      description: 'Стратегические решения для оптимизации бизнес-процессов'
    },
    {
      icon: 'Calculator',
      title: 'Бухгалтерское сопровождение',
      description: 'Полный учёт и налоговое планирование для вашего бизнеса'
    }
  ];

  const advantages = [
    {
      number: '15+',
      text: 'лет опыта в корпоративном праве'
    },
    {
      number: '200+',
      text: 'успешно завершённых дел'
    },
    {
      number: '98%',
      text: 'выигранных судебных споров'
    },
    {
      number: '24/7',
      text: 'поддержка клиентов'
    }
  ];

  const cases = [
    {
      title: 'Реструктуризация крупного холдинга',
      result: 'Сохранено 2,3 млрд рублей активов',
      category: 'Корпоративное право'
    },
    {
      title: 'Разрешение конфликта акционеров',
      result: 'Достигнуто мировое соглашение без судебных издержек',
      category: 'Корпоративные споры'
    },
    {
      title: 'Сопровождение процедуры банкротства',
      result: 'Минимизированы убытки кредиторов на 40%',
      category: 'Банкротство'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Scale" size={32} className="text-accent" />
            <span className="text-2xl font-bold text-primary">LegalPro</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-accent transition-colors">Преимущества</a>
            <a href="#cases" className="text-foreground hover:text-accent transition-colors">Кейсы</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-primary">
            Консультация
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Стратегическая защита вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Комплексные юридические решения для развития и защиты корпоративных интересов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name="Scale" size={120} className="text-accent opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг для корпоративных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{advantage.number}</div>
                <p className="text-lg text-foreground">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши кейсы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-border bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="text-sm font-medium text-accent uppercase tracking-wider">
                    {caseItem.category}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{caseItem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{caseItem.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Получите бесплатную консультацию по вашему вопросу
            </p>
          </div>
          <Card className="border-border shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                      className="border-border focus:border-accent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="border-border focus:border-accent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.ru"
                    className="border-border focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш вопрос"
                    className="border-border focus:border-accent min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={28} className="text-accent" />
                <span className="text-xl font-bold">LegalPro</span>
              </div>
              <p className="text-primary-foreground/80">
                Профессиональные юридические услуги для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@legalpro.ru</p>
                <p>Москва, ул. Примерная, 1</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 9:00 - 19:00</p>
                <p>Сб-Вс: по договорённости</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 LegalPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
