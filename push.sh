cd /d/programmersStuf/testScript

# Додаємо всі змінені файли
git add .

# Пишемо комміт
echo "Введіть ваше комміт-повідомлення:"
read commit_message

# Виконуємо комміт з введеним повідомленням
git commit -m "$commit_message"

# Пушимо зміни на репозиторій
git push origin