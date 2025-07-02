import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ProductCatalog = () => {
  const packages = [
    {
      id: 1,
      name: "Стартовый пакет",
      points: 1000,
      price: 299,
      originalPrice: 399,
      discount: 25,
      popular: false,
      features: ["Мгновенная доставка", "Гарантия возврата", "Техподдержка"],
    },
    {
      id: 2,
      name: "Популярный выбор",
      points: 2500,
      price: 699,
      originalPrice: 899,
      discount: 22,
      popular: true,
      features: ["Мгновенная доставка", "Бонус +100 поинтов", "VIP поддержка"],
    },
    {
      id: 3,
      name: "Максимальный пакет",
      points: 5000,
      price: 1299,
      originalPrice: 1699,
      discount: 24,
      popular: false,
      features: [
        "Мгновенная доставка",
        "Бонус +300 поинтов",
        "VIP поддержка",
        "Эксклюзивные предложения",
      ],
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Выберите свой пакет
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все пакеты включают мгновенную доставку и полную гарантию
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative p-6 hover:shadow-xl transition-all duration-300 ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700">
                  Популярный выбор
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon name="Coins" className="text-yellow-500" size={24} />
                  <span className="text-2xl font-bold text-gray-900">
                    {pkg.points.toLocaleString()}
                  </span>
                  <span className="text-gray-500">поинтов</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {pkg.price}₽
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {pkg.originalPrice}₽
                      </span>
                    )}
                  </div>
                  {pkg.discount && (
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      Скидка {pkg.discount}%
                    </Badge>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-2"
                      size={16}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
                size="lg"
              >
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Купить сейчас
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Нужен индивидуальный пакет?</p>
          <Button variant="outline" size="lg">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
