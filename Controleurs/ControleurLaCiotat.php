<?php

final class ControleurLaCiotat
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("LaCiotat/laCiotat");
        Vue::montrer("Standard/pied");
    }
}