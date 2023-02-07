<?php

final class ControleurHome
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Home/home");
        Vue::montrer("Standard/pied");
    }
}