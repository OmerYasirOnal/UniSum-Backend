```markdown
# Katkıda Bulunma Rehberi

## Hoş Geldiniz
UniSum Backend projesine katkıda bulunmaya hoş geldiniz! Bu rehber, katkıda bulunma sürecinizde size yardımcı olacak adımları ve bilgileri içermektedir. Her türlü katkınız, projenin geliştirilmesine yardımcı olacaktır.

## Katkıda Nasıl Bulunulur
Katkıda bulunmak için aşağıdaki adımları izleyin:
1. Projeyi fork'layın.
2. Yeni bir dal (branch) oluşturun: `git checkout -b feature/your-feature`
3. Değişikliklerinizi yapın ve kaydedin: `git commit -m "Add some feature"`
4. Değişikliklerinizi gönderin: `git push origin feature/your-feature`
5. Pull request oluşturun.

## Geliştirme Ortamı Kurulumu
Geliştirme ortamınızı kurmak için aşağıdaki adımları izleyin:

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/UniSum-Backend.git
   cd UniSum-Backend
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. `.env.example` dosyasını kopyalayıp `.env` olarak kaydedin ve gerekli ayarları yapın:
   ```bash
   cp .env.example .env
   # .env dosyasını düzenleyin
   ```

4. Veritabanını kurun:
   ```bash
   # Veritabanını oluşturun (MySQL)
   # Veritabanı şemalarını oluşturmak için Sequelize kullanabilirsiniz
   ```

5. Uygulamayı başlatın:
   ```bash
   npm start
   ```

## Pull Request Süreci
Pull request oluşturmak için:
1. Değişikliklerinizi tamamladıktan sonra, kodu ana dal ile birleştirmek için bir pull request oluşturun.
2. Pull request'inizi açıklayıcı bir başlık ve açıklama ile doldurun.
3. Kod incelemesi için projenin diğer katkıcılarından geri dönüş bekleyin.
4. Gerekli değişiklikleri yaptıktan sonra, pull request'iniz birleştirilecektir.

## Davetler
Projemize katkıda bulunmak için bu yönergeleri izlemeyi unutmayın. Herhangi bir sorunuz veya öneriniz varsa, lütfen bizimle iletişime geçin!

## Davranış Kuralları
Katkıda bulunan herkesin, saygılı ve destekleyici bir ortam yaratma konusunda sorumluluk sahibi olduğunu unutmamalıyız. Lütfen [Davranış Kuralları](TODO: Add Code of Conduct) sayfamızı inceleyin.

## Kodlama Standartları
Projemizde belirli kodlama standartlarına uymak önemlidir. Lütfen [Kodlama Standartları](TODO: Add Coding Standards) sayfamızı kontrol edin.
```