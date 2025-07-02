import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Покупайте FS Points
            <span className="text-blue-600"> безопасно и быстро</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Профессиональная платформа для покупки игровых поинтов. Мгновенная
            доставка, гарантия качества, круглосуточная поддержка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Выбрать пакет
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Мгновенная доставка
            </h3>
            <p className="text-gray-600">
              Поинты поступают на ваш аккаунт в течение 5 минут после оплаты
            </p>
          </Card>

          <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              100% безопасность
            </h3>
            <p className="text-gray-600">
              SSL-шифрование и защищенные платежи через проверенные системы
            </p>
          </Card>

          <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Поддержка 24/7
            </h3>
            <p className="text-gray-600">
              Наша команда готова помочь в любое время дня и ночи
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
