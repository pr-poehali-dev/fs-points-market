import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Gamepad2" className="text-blue-600" size={28} />
            <h1 className="text-xl font-semibold text-gray-900">
              FS Points Store
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#catalog"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Каталог
            </a>
            <a
              href="#how-to-buy"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Как купить
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
