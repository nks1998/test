SELECT CONCAT(c.first_name, ' ', c.last_name) AS `Full Name`, COUNT(*) AS total_items
FROM customers c JOIN orders o ON c.id = o.customer_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE c.country = 'Singapore' AND YEAR(o.order_date) = 2023
GROUP BY c.id, c.first_name, c.last_name
HAVING COUNT(*) > 5;