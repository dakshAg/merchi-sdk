<?php
declare(strict_types = 1);

use PHPUnit\Framework\TestCase;

require_once 'sdk/php/src/products.php';

final class PhpSuite extends TestCase
{
    public function testCanCreateProduct()
    {
        new Product();
    }
}
