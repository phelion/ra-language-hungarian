module.exports = {
    ra: {
        action: {
            add_filter: 'Szűrő hozzáadása',
            add: 'Hozzáadás',
            back: 'Vissza',
            bulk_actions: '%{smart_count} kiválasztva',
            cancel: 'Mégsem',
            clear_input_value: 'Ürítés',
            clone: 'Másolás',
            create: 'Új',
            delete: 'Törlés',
            edit: 'Szerkesztés',
            export: 'Exportálás',
            list: 'Lista',
            refresh: 'Frissítés',
            remove_filter: 'Szűrő törlése',
            remove: 'Törlés',
            save: 'Mentés',
            show: 'Megtekint',
            sort: 'Rendezés',
            undo: 'Visszavonás',
            confirm: 'Megerősítés',
            search: 'Keresés',
            unselect: 'Kijelölés törlése',
            expand: 'Kiterjesztés',
            close: 'Bezárás',
            open_menu: 'Menü megnyitása',
            close_menu: 'Menü bezárása',
        },
        boolean: {
            true: 'Igen',
            false: 'Nem',
            null: ' ',
        },
        page: {
            create: '%{name} létrehozása',
            dashboard: 'Irányítópult',
            edit: '%{name} #%{id}',
            error: 'Valami hiba történt',
            list: '%{name} lista',
            loading: 'Betöltés',
            not_found: 'Nem található',
            show: '%{name} #%{id}',
            empty: 'Nem létezik a %{name}.',
            invite: 'Szeretne létrehozni egyet?',
        },
        input: {
            file: {
                upload_several:
                    'Húzzunk ide néhány fájlt a feltöltéshez, vagy kattintsunk a fájlok kiválasztásához.',
                upload_single: 'Húzzunk ide egy fájlt a feltöltéshez, vagy kattintsunk a fájl kiválasztáshoz.',
            },
            image: {
                upload_several:
                    'Húzzunk ide néhány képet a feltöltéshez, vagy kattintsunk a képek kiválasztásához.',
                upload_single:
                    'Húzzunk ide egy képet a feltöltéshez, vagy kattintsunk a kép kiválasztáshoz.',
            },
            references: {
                all_missing: 'A referencia adatok nem elérhetőek',
                many_missing:
                    'Egy vagy több kapcsolódó referencia adat nem elérhető',
                single_missing:
                    'Egy kapcsolódó referencia adat nem elérhető',
            },
            password: {
                toggle_visible: 'Jelszó elrejtése',
                toggle_hidden: 'Jelszó megjelenítése',
            },
        },
        message: {
            about: 'Névjegy',
            are_you_sure: 'Biztos benne?',
            bulk_delete_content:
                'Biztosan törli a(z) %{name}? |||| Biztosan törli a(z) %{smart_count} ?',
            bulk_delete_title:
                '%{name} törlése |||| %{smart_count} %{name} törlése',
            delete_content: 'Biztosan törli??',
            delete_title: '%{name} #%{id} törlése',
            details: 'Részletek',
            error:
                "Egy kliens hiba miatt a kérés nem tudott teljesülni",
            invalid_form: 'Az űrlap kitöltése helytelen. Kérem ellenőrizze a hibákat!',
            loading: 'Az oldal töltődik, csak néhány pillanat',
            no: 'Nem',
            not_found:
                'Elírta, vagy rossz URL-t adott meg.',
            yes: 'Igen',
            unsaved_changes:
            "Néhány változtatást nem mentettünk. Biztosan el akarja hagyni az oldalt?",
        },
        navigation: {
            no_results: 'Nincs egyetlen bejegyzés sem.',
            no_more_results:
                'A megadott oldalszám %{page} nem elérhető. Próbálja meg az előző oldalt.',
            page_out_of_boundaries: 'A megadott oldalszám %{page} nem elérhető',
            page_out_from_end: 'Az utolsó oldalnál tovább nem lehet lapozni',
            page_out_from_begin: 'Az első olalnál előrrébb nem lehet lapozni',
            page_range_info: '%{offsetBegin}-%{offsetEnd} a(z) %{total} darabból',
            next: 'Következő',
            prev: 'Előző',
            page_rows_per_page: 'Sorok oldalanként:',
        },
        sort: {
            sort_by: 'Sorrend %{field} %{order}',
            ASC: 'növekvő',
            DESC: 'csökkenő',
        },
        auth: {
            auth_check_error: 'A folytatáshoz jelentkezzen be',
            user_menu: 'Profil',
            username: 'Felhasználónév',
            password: 'Jelszó',
            sign_in: 'Bejelentkezés',
            sign_in_error: 'Sikertelen bejelentkezés. Kérem, próbálja újra.',
            logout: 'Kijelentkezés',
        },
        notification: {
            updated: 'A bejegyzés módosítva |||| %{smart_count} bejegyzések módosítva',
            created: 'A bejegyzés létrehozva',
            deleted: 'A bejegyzés törölve |||| %{smart_count} bejegyzések törölve',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'A bejegyzés nem létezik',
            http_error: 'Hiba történt a kommunikáció során',
            data_provider_error:
                'Adat szolgáltató hiba. Nézze meg a konzolt a részletekért',
            canceled: 'Folyamat megszakítva',
            auth_check_error: 'A folytatáshoz jelentkezzen be',
            user_menu: 'Profil',
            i18n_error:
            'Hiba történt a kiválasztott nyelv betöltése során.',
            logged_out: 'A munkamenet befejeződött. Jelentkezzen be újra!',
        },
        validation: {
            required: 'Kitöltendő',
            minLength: 'Legalább %{min} karakter hosszú legyen',
            maxLength: 'Legfeljebb %{max} karakter hosszú lehet',
            minValue: 'Legalább %{min} legyen',
            maxValue: 'Legfeljebb %{max} lehet',
            number: 'Szám legyen',
            email: 'Helyes email legyen',
            oneOf: 'Ezek közül valamelyik legyen: %{options}',
            regex: 'Egyeznie kell az alábbi formátummal (regexp): %{pattern}',
        },
    },
};
