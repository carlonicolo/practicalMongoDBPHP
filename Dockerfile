# The official PHP Apache runtime
FROM php:8.2-apache
# Enable Apache modules
RUN a2enmod rewrite
# Install MongoDB extension and enable it within Docker
RUN pecl install mongodb \
    && docker-php-ext-enable mongodb