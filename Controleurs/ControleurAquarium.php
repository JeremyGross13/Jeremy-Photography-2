<?php

final class ControleurAquarium
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Aquarium/aquarium");
        Vue::montrer("Standard/pied");
    }
}