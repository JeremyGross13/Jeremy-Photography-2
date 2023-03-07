<?php

final class ControleurContact
{
    public function defautAction()
    {
        Vue::montrer("Standard/enTete");
        Vue::montrer("Standard/menu");
        Vue::montrer("Contact/contact");
        Vue::montrer("Standard/pied");
    }
}