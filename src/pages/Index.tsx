import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    comment: ""
  });

  const menuItems = [
    {
      category: "Закуски",
      items: [
        { name: "Тартар из тунца", description: "С авокадо, икрой тобико и соусом юдзу", price: "2 400" },
        { name: "Карпаччо из мраморной говядины", description: "С трюфельным маслом и руколой", price: "1 900" },
        { name: "Буррата с томатами", description: "Черри на гриле и базиликовым песто", price: "1 600" }
      ]
    },
    {
      category: "Основные блюда",
      items: [
        { name: "Стейк рибай", description: "300г, выдержка 21 день, с овощами гриль", price: "4 200" },
        { name: "Филе палтуса", description: "С пюре из сельдерея и икорным соусом", price: "3 400" },
        { name: "Утиная грудка", description: "Конфи с грушей и соусом из черной смородины", price: "2 900" }
      ]
    },
    {
      category: "Десерты",
      items: [
        { name: "Шоколадный мусс", description: "С малиновым coulis и золотом", price: "890" },
        { name: "Тарт Татен", description: "С ванильным мороженым и карамелью", price: "790" },
        { name: "Панна-котта", description: "С маракуйей и кокосовой крошкой", price: "690" }
      ]
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/projects/16d143e2-f487-4a45-a063-9eebc3831de8/files/bff149ef-9120-44c0-b208-d6cd2f162d27.jpg",
      title: "Молекулярная гастрономия"
    },
    {
      url: "https://cdn.poehali.dev/projects/16d143e2-f487-4a45-a063-9eebc3831de8/files/2fe4e1b2-fe9b-4d52-99db-e5543df8a704.jpg",
      title: "Атмосфера ресторана"
    },
    {
      url: "https://cdn.poehali.dev/projects/16d143e2-f487-4a45-a063-9eebc3831de8/files/c5f0ad72-c134-4fa3-a057-618c86adf6c1.jpg",
      title: "Искусство презентации"
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами для подтверждения бронирования.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lumière</h1>
          <div className="hidden md:flex gap-8">
            <a href="#concept" className="hover:text-primary transition-colors">Концепция</a>
            <a href="#menu" className="hover:text-primary transition-colors">Меню</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#booking" className="hover:text-primary transition-colors">Бронирование</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light mb-6">Lumière</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto font-light">
            Авторская кухня, где каждое блюдо — это история
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 italic">Философия шефа Александра Светова</p>
          <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            Забронировать стол
          </Button>
        </div>
      </section>

      <section id="concept" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl mb-6">Наша концепция</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <Icon name="Flame" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl mb-4">Авторский подход</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Шеф Александр Светов создаёт блюда на стыке традиций и инноваций. Каждая композиция — это баланс вкусов, текстур и эстетики.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <Icon name="Leaf" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl mb-4">Сезонность</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы работаем только с сезонными продуктами от локальных фермеров. Меню меняется каждые три месяца, следуя природным циклам.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <Icon name="Wine" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl mb-4">Винная карта</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Более 200 позиций от лучших виноделен мира. Наш сомелье подберёт идеальное сопровождение к каждому блюду.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl mb-4">Атмосфера</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Камерный зал на 24 гостя создаёт интимную атмосферу. Вы становитесь частью кулинарного спектакля.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-card/30 p-12 rounded-lg border border-border">
            <blockquote className="text-2xl md:text-3xl font-light italic text-foreground/90 mb-4">
              "Каждое блюдо — это диалог между шефом и гостем. Я не просто готовлю еду, я рассказываю истории через вкус."
            </blockquote>
            <p className="text-muted-foreground">— Александр Светов, шеф-повар</p>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 px-4 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">Меню</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg">Сезон Зима 2024/25</p>
          </div>

          <div className="space-y-16">
            {menuItems.map((section, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-4xl mb-8 text-center">{section.category}</h3>
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-start gap-4 pb-6 border-b border-border/50 hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-2xl font-light text-primary whitespace-nowrap">
                        {item.price} ₽
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 bg-card/50 rounded-lg border border-border">
            <Icon name="ChefHat" size={48} className="text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground mb-4">
              Доступно дегустационное меню из 7 блюд
            </p>
            <p className="text-3xl font-light text-primary">6 900 ₽</p>
            <p className="text-sm text-muted-foreground mt-2">Винное сопровождение +3 500 ₽</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">Галерея</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl text-foreground">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-card/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">Бронирование</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg">Мы ждём вас каждый день с 18:00 до 00:00</p>
          </div>

          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Ваше имя</label>
                  <Input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Телефон</label>
                  <Input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-muted-foreground">Дата</label>
                    <Input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-muted-foreground">Время</label>
                    <Input
                      type="time"
                      required
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Количество гостей</label>
                  <Input
                    type="number"
                    min="1"
                    max="8"
                    required
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-muted-foreground">Комментарий</label>
                  <Textarea
                    value={bookingData.comment}
                    onChange={(e) => setBookingData({ ...bookingData, comment: e.target.value })}
                    className="bg-background/50 min-h-[100px]"
                    placeholder="Особые пожелания, аллергии, предпочтения..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Забронировать стол
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-2xl mb-4">Lumière</h3>
              <p className="text-muted-foreground">Авторская кухня с философией</p>
            </div>
            
            <div>
              <h4 className="text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                <Icon name="MapPin" size={20} />
                Адрес
              </h4>
              <p className="text-muted-foreground">
                Барнаул, проспект Ленина, 82<br />
                Центр города
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                <Icon name="Phone" size={20} />
                Контакты
              </h4>
              <p className="text-muted-foreground">
                +7 (495) 123-45-67<br />
                info@lumiere-restaurant.ru
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2024 Lumière. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;